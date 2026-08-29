/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { timeManagement } from '../TimeMF/timeManagement.va.mjs';
/**
 * @summary clockSource_systemOID
 * @description
 *
 * Registers name binding `clockSource-system`: a
 * `clockSource` (and subclasses) is named by a `system`
 * object with attribute `clockID`. Create with automatic
 * instance naming; delete deletes contained objects. ITU-T Rec. X.743 (06/98)
 * [§8.5.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockSource-systemOID OBJECT IDENTIFIER ::= {timeManagement nameBinding(6) clockSource-system(2)}
 * ```
 *
 * @constant
 */
export const clockSource_systemOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* nameBinding */ 6, /* clockSource-system */ 2],
    timeManagement
);

/* eslint-enable */
