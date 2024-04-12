pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sudo apt install npm
                sh 'npm install' 
            }
        }
    }
}
