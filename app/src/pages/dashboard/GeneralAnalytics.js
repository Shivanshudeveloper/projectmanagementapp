// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';
import {
  AnalyticsTasks,
  AnalyticsNewUsers,
  AnalyticsBugReports,
  AnalyticsItemOrders,
  AnalyticsNewsUpdate,
  AnalyticsWeeklySales,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates
} from '../../components/_dashboard/general-analytics';

// ----------------------------------------------------------------------

export default function GeneralAnalytics() {
  return (
    <Page title="General: Analytics | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsTasks />
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
