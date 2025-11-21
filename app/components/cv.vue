<template>
  <div class="cv-container">
    <header class="cv-header">
      <h1 class="name">{{ fullName }}</h1>
      <h2 class="title">Software Engineer</h2>
      <h2 class="contact">
        {{ d.contacts?.location }} | {{ d.contacts.phone }} |
        {{ d.contacts.email }}
      </h2>
      <p class="summary">{{ d.summary }}</p>
    </header>

    <div class="cv-main">
      <section class="section">
        <h3 class="section-title">Pengalaman Kerja</h3>
        <div class="experience-list">
          <div
            v-for="(work, index) in d.workExperience"
            :key="index"
            class="experience-item"
          >
            <div class="experience-header">
              <div class="header-item">
                <h4 class="job-title">{{ work.jobTitle }}</h4>
                <span class="date"
                  >{{ formatDate(work.startDate) }} -
                  {{
                    work.endDate ? formatDate(work.endDate) : 'Sekarang'
                  }}</span
                >
              </div>
              <div class="header-item" style="justify-content: left; gap: 2px">
                <span class="company">{{ work.company }}</span>
                <span>-</span>
                <span class="location">{{ work.location }}</span>
              </div>
            </div>
            <ul class="description-list">
              <li
                v-for="(desc, descIndex) in work.description"
                :key="descIndex"
                class="description-item"
              >
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Skills</h3>
        <div class="skills-category">
          <div
            v-for="(skill, index) in d.skills"
            :key="index"
            class="skill-item"
          >
            <span class="skill-label"
              >{{ skill.category }}:
              <span>{{ skill.items.join(', ') }}</span></span
            >
          </div>
        </div>
      </section>

      <section class="section" v-if="d.licenses && d.licenses.length > 0">
        <h3 class="section-title">Sertifikasi</h3>
        <div class="certification-list">
          <div
            v-for="(cert, index) in d.licenses"
            :key="index"
            class="certification-item"
          >
            <div class="cert-header">
              <h4 class="cert-name">{{ cert.name }}</h4>
              <span class="cert-date"
                >{{ formatCertDate(cert.issueDate) }} -
                {{ formatCertDate(cert.expirationDate) }}</span
              >
            </div>
            <p class="cert-org">
              {{ cert.issuingOrganization }}
              <span class="cert-id">
                (Credential ID: {{ cert.credentialId }})
              </span>
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <h3 class="section-title">Pendidikan</h3>
        <div class="education-list">
          <div
            v-for="(edu, index) in d.education"
            :key="index"
            class="education-item"
          >
            <h4 class="institution">{{ edu.institution }}</h4>
            <p class="jurusan">{{ edu.jurusan }}</p>
            <p class="education-date">
              {{ formatEducationDate(edu.startYear) }} -
              {{ edu.endYear ? formatEducationDate(edu.endYear) : 'Sekarang' }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <div class="ats-optimized">
      <p>
        {{ fullName }} Software Engineer Vue.js JavaScript Laravel Flutter
        Frontend Developer Full Stack
      </p>
      <p v-for="(work, index) in d.workExperience" :key="index">
        {{ work.jobTitle }} {{ work.company }} {{ work.description.join(' ') }}
      </p>
      <template v-for="(skill, key) in d.skills" :key>
        <p v-for="item in skill.items">
          {{ item }}
        </p>
      </template>
      <template v-if="d.licenses">
        <p v-for="(cert, index) in d.licenses" :key="index">
          {{ cert.name }} {{ cert.issuingOrganization }}
          {{ cert.skills.join(' ') }}
        </p>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import cv, { type Skill } from '~/data'
  import { type Data } from '~/data'

  const d = ref<Data>(cv)
  const fullName = computed(() => {
    return `${d.value.firstName} ${d.value.lastName || ''}`.trim()
  })

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const [year, month] = dateString.split('-')
    const months: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ]
    return `${months[parseInt(month!) - 1]} ${year}`
  }

  const formatCertDate = (dateString: string) => {
    if (!dateString) return ''
    const [year, month] = dateString.split('-')
    const months: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ]
    return `${months[parseInt(month!) - 1]} ${year}`
  }

  const formatEducationDate = (dateString: string) => {
    if (!dateString) return ''
    const [year, month] = dateString.split('-')
    const months: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Okt',
      'Nov',
      'Des',
    ]
    return `${months[parseInt(month!) - 1]} ${year}`
  }

  const parseSkill = (skill: Skill): string => {
    const levelSkill: string[] = [
      'Beginner',
      'Intermediate',
      'Advanced',
      'Export',
    ]
    return skill.level ? (levelSkill[skill.level! + 1] ?? '') : ''
  }
  const getData = async () => {
    const res = await fetch('http://localhost:8000/api/health')
    const data = await res.json()
    console.log(data)
  }

  onMounted(() => {
    getData()
  })
</script>

<style scoped>
  .cv-container {
    max-width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    padding: 20mm;
    font-family: 'Times New Roman', 'Arial', sans-serif;
    font-size: 11pt;
    line-height: 1.4;
    color: #000;
    background: #fff;
  }

  .cv-header {
    text-align: center;
    margin-bottom: 18px;
    border-bottom: 2px solid #000;
    padding-bottom: 15px;
  }

  .name {
    font-size: 24pt;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
  }

  .title {
    font-size: 14pt;
    font-weight: normal;
    font-style: italic;
    margin: 0;
    color: #333;
  }

  .contact {
    font-size: 12pt;
    font-weight: normal;
    margin: 12px 0;
  }

  .summary {
    font-size: 11pt;
    text-align: justify;
    margin: 0;
  }

  .section {
    margin-bottom: 20px;
    page-break-inside: avoid;
  }

  .section-title {
    font-size: 14pt;
    font-weight: bold;
    margin: 0 0 10px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
    text-transform: uppercase;
  }

  .experience-item {
    margin-bottom: 15px;
    page-break-inside: avoid;
  }

  .experience-header {
    margin-bottom: 8px;
  }

  .experience-header .header-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .job-title {
    font-size: 12pt;
    font-weight: bold;
    margin: 0;
    display: inline;
  }

  .company {
    font-weight: normal !important;
    font-style: italic;
  }

  .date {
    float: right;
  }

  .location {
    display: block;
    font-style: italic;
    color: #666;
    margin-top: 2px;
  }

  .description-list {
    margin: 0;
    padding-left: 20px;
  }

  .description-item {
    text-align: justify;
  }

  .skills-category {
  }

  .skill-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 2px; */
  }

  .skill-label {
    font-weight: bold;
  }

  .skill-label span {
    font-weight: normal;
  }

  .certification-list {
    margin-top: 10px;
  }

  .certification-item {
    margin-bottom: 10px;
    page-break-inside: avoid;
  }

  .cert-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2px;
  }

  .cert-name {
    font-size: 11pt;
    font-weight: bold;
    margin: 0;
    flex: 1;
  }

  .cert-date {
    font-size: 10pt;
    color: #666;
    white-space: nowrap;
    margin-left: 10px;
  }

  .cert-org {
    font-size: 10pt;
    font-weight: bold;
    margin: 0 0 3px 0;
    color: #333;
  }

  .cert-id {
    font-size: 9pt;
    margin: 0;
    color: #666;
    font-style: italic;
    font-weight: normal;
  }

  .education-item {
    margin-bottom: 10px;
  }

  .institution {
    font-size: 12pt;
    font-weight: bold;
    margin: 0 0 3px 0;
  }

  .jurusan {
    margin: 0;
    font-style: italic;
  }

  .education-date {
    font-size: 10pt;
    margin: 2px 0 0 0;
    color: #666;
  }

  .ats-optimized {
    position: absolute;
    left: -9999px;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  @media print {
    .cv-container {
      margin: 0;
      padding: 15mm;
      box-shadow: none;
      min-height: auto;
    }

    .section {
      break-inside: avoid;
    }

    .experience-item {
      break-inside: avoid;
    }

    .certification-item {
      break-inside: avoid;
    }

    .ats-optimized {
      display: none;
    }
  }

  .cv-container * {
    box-sizing: border-box;
    float: none !important;
  }

  .job-title,
  .company,
  .institution,
  .cert-name {
    font-weight: bold;
  }
</style>
