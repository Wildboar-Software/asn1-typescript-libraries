/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    RepairActivityList,
    _decode_RepairActivityList,
    _encode_RepairActivityList,
} from '../X790ASN1Module/RepairActivityList.ta.mjs';
import {
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
import {
    _decode_ActivityCode,
    _encode_ActivityCode,
} from '../X790ASN1Module/ActivityCode.ta.mjs';

/**
 * @summary repairActivityListRepairActivityListInitial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * repairActivityListRepairActivityListInitial RepairActivityList ::= {}
 * ```
 *
 * @constant
 */
export const repairActivityListRepairActivityListInitial: RepairActivityList = [];

/* eslint-enable */
