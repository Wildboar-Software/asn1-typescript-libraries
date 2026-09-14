/**
 * Directory `AttributeUsage` (ISO/IEC 9594-2). DFR attributes use
 * the ATTRIBUTE macro; usage defaults follow the Directory.
 * ISO/IEC 10166-1:1991 §5.1, §9.
 */
export {
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
    type AttributeUsage,
    AttributeUsage_directoryOperation,
    AttributeUsage_distributedOperation,
    AttributeUsage_dSAOperation,
    AttributeUsage_userApplications,
    directoryOperation,
    distributedOperation,
    dSAOperation,
    userApplications,
} from "@wildboar/x500/InformationFramework";
