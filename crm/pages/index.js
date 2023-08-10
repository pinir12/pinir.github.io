const IndexPage = () => {
    return null;
  };
  
  export const getServerSideProps = async (context) => {
    context.res.writeHead(302, { Location: '/dashboard' });
    context.res.end();
    
    // You can also return props for the redirected page here,
    // but they won't be used by this component.
  
    return {props: {}};
  };
  
  export default IndexPage;
  