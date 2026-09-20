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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectClass_basicObjectClass, _decode_ObjectClass_basicObjectClass, _encode_ObjectClass_basicObjectClass } from "../ISO-9506-MMS-1/ObjectClass-basicObjectClass.ta.mjs";
import { ObjectClass_csObjectClass, _decode_ObjectClass_csObjectClass, _encode_ObjectClass_csObjectClass } from "../ISO-9506-MMS-1/ObjectClass-csObjectClass.ta.mjs";


/**
 * @summary ObjectClass
 * @description
 *
 * Object class of a named MMS object. `basicObjectClass` covers the classes in
 * ISO 9506-1:2003 §7.6.2 ; `csObjectClass` is the extended set
 * (EventConditionList, UnitControl) when CBB `cspi` is used (ISO 9506-1:2003
 * §7.6; ISO 9506-2:2003 §7.5.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClass  ::=     CHOICE {
 *    basicObjectClass       [0] IMPLICIT INTEGER {
 *        namedVariable          (0)
 *              -- value 1 is reserved for definition in Annex E
 * ,      scatteredAccess        (1)
 * ,      namedVariableList      (2)
 * ,      namedType              (3)
 * ,      semaphore              (4),
 *        eventCondition         (5),
 *        eventAction            (6),
 *        eventEnrollment        (7),
 *        journal                (8),
 *        domain                 (9),
 *        programInvocation      (10),
 *        operatorStation        (11),
 *        dataExchange           (12),
 *    -- Shall not appear in minor version 1
 *        accessControlList      (13)
 *    -- Shall not appear in minor version 1 or 2
 *        } (0..13),
 *   ...
 * ,  csObjectClass          [1] IMPLICIT INTEGER {
 *        eventConditionList     (0),
 *        unitControl            (1) } (0..1)
 *    }
 * ```
 */
export
type ObjectClass =
    { basicObjectClass: ObjectClass_basicObjectClass } /* CHOICE_ALT_ROOT */
    | { csObjectClass: ObjectClass_csObjectClass } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ObjectClass: $.ASN1Decoder<ObjectClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectClass (el: _Element): ObjectClass {
    if (!_cached_decoder_for_ObjectClass) { _cached_decoder_for_ObjectClass = $._decode_extensible_choice<ObjectClass>({
    "CONTEXT 0": [ "basicObjectClass", $._decode_implicit<ObjectClass_basicObjectClass>(() => _decode_ObjectClass_basicObjectClass) ],
    "CONTEXT 1": [ "csObjectClass", $._decode_implicit<ObjectClass_csObjectClass>(() => _decode_ObjectClass_csObjectClass) ]
}); }
    return _cached_decoder_for_ObjectClass(el);
}

let _cached_encoder_for_ObjectClass: $.ASN1Encoder<ObjectClass> | null = null;

/**
 * @summary Encodes a(n) ObjectClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClass, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectClass (value: ObjectClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectClass) { _cached_encoder_for_ObjectClass = $._encode_choice<ObjectClass>({
    "basicObjectClass": $._encode_implicit(_TagClass.context, 0, () => _encode_ObjectClass_basicObjectClass, $.BER),
    "csObjectClass": $._encode_implicit(_TagClass.context, 1, () => _encode_ObjectClass_csObjectClass, $.BER),
}, $.BER); }
    return _cached_encoder_for_ObjectClass(value, elGetter);
}


/* eslint-enable */
