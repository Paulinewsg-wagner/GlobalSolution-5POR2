import React from 'react';
import styles from './WellnessScore.module.css';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Header from '../components/Header/Header.jsx';
import ChartCard from '../../components/ChartCard/ChartCard';
import ScoreBreakdown from '../../components/ScoreBreakdown/ScoreBreakdown';
import SuggestedActions from '../../components/SuggestedActions/SuggestedActions';

const WellnessScore = () => {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header title="Wellness Score" />
        <div className={styles.pageContent}>
          <ChartCard />
          <ScoreBreakdown />
          <SuggestedActions />
        </div>
      </div>
    </div>
  );
};

export default WellnessScore;