/**
 * @module
 * @description
 *
 * X.208 / X.209 edition of the network protocol profile (ECMA-165 Annex K Table
 * K.2), object identifier `network-protocol-profile-definition(8)`. It selects
 * ACSE or DSE service APDUs in a Facility information element. Absence of the
 * element means ROSE (§11.3.3 NOTE 3). The encoded value matches the X.680
 * module (Annex K).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./NetworkProtocolProfile.ta.mjs";
