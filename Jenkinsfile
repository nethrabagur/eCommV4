pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                // bat 'npx playwright test'
                sh "npx playwright test tests/2_Login/Login.spec.js "
            }
        }
    }
}  