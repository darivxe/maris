Maris is a Blue Carbon Registry Website using block-chain technology

Built using Solidity, Celo Alfajores, Python

This project is built as a full-stack system that connects field data, verification workflows, and on-chain carbon credit issuance into one continuous pipeline.

The interface is designed for two types of users: contributors working on restoration sites and administrators overseeing verification and approvals. Field users interact through a mobile-friendly experience that allows them to submit observations, sync sensor data, and upload geo-tagged images even in low-connectivity environments. Administrators use a web dashboard to review incoming datasets, inspect trends and evidence, and approve or reject verification cycles. The interface also visualizes project activity, token lifecycle, and environmental metrics in real time.

On the client side, the application handles project onboarding, evidence submission, and tracking of credit status from issuance to retirement. Wallet-based authentication is used so that contributors, reviewers, and stakeholders operate under role-linked identities. The frontend communicates with backend APIs for data ingestion, verification results, and blockchain events, keeping the experience responsive while maintaining traceability.

Behind the interface, the backend acts as the coordination layer for the entire MRV workflow. It receives environmental and observational data, validates and structures submissions, and prepares verification dossiers for review. It also manages project records, user roles, and lifecycle states while maintaining references to off-chain assets such as imagery, logs, and metadata. Event listeners monitor blockchain activity and synchronize token actions back into dashboards and analytics views.

The blockchain component anchors project credibility and credit issuance. Restoration projects are mapped to token identifiers through a smart-contract registry deployed on Celo. Verified outcomes trigger minting of ERC-1155 tokens representing carbon credits tied to that project. These tokens can be transferred, held, or retired, with each action recorded as an immutable on-chain event. Metadata and supporting evidence are referenced via content-addressed storage, ensuring every credit has a verifiable provenance trail without overloading the chain.

Together, these layers create a system where environmental data flows from field collection to verification and ultimately to tokenized carbon credits, while maintaining transparency, auditability, and clear accountability across the entire lifecycle.
