import { auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();
  return (
    <div>
      Orgarnization Page!
    </div>
  );
};

export default OrganizationIdPage;