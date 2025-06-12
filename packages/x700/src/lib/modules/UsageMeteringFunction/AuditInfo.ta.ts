/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { UMF_AUDIT } from '../UsageMeteringFunction/UMF-AUDIT.oca.js';
export { UMF_AUDIT } from '../UsageMeteringFunction/UMF-AUDIT.oca.js';
import { AuditInfoSet } from '../UsageMeteringFunction/AuditInfoSet.osa.js';
export { AuditInfoSet } from '../UsageMeteringFunction/AuditInfoSet.osa.js';

/* START_OF_SYMBOL_DEFINITION AuditInfo */
/**
 * @summary AuditInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuditInfo ::= SEQUENCE {
 *   service       UMF-AUDIT.&id({AuditInfoSet}),
 *   auditDetails  UMF-AUDIT.&Value({AuditInfoSet}{@.service})
 * }
 * ```
 *
 * @class
 */
export class AuditInfo {
    constructor(
        /**
         * @summary `service`.
         * @public
         * @readonly
         */
        readonly service: OBJECT_IDENTIFIER,
        /**
         * @summary `auditDetails`.
         * @public
         * @readonly
         */
        readonly auditDetails: _Element
    ) {}

    /**
     * @summary Restructures an object into a AuditInfo
     * @description
     *
     * This takes an `object` and converts it to a `AuditInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuditInfo`.
     * @returns {AuditInfo}
     */
    public static _from_object(
        _o: { [_K in keyof AuditInfo]: AuditInfo[_K] }
    ): AuditInfo {
        return new AuditInfo(_o.service, _o.auditDetails);
    }
}
/* END_OF_SYMBOL_DEFINITION AuditInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuditInfo */
/**
 * @summary The Leading Root Component Types of AuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuditInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'service',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'auditDetails',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AuditInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuditInfo */
/**
 * @summary The Trailing Root Component Types of AuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuditInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AuditInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuditInfo */
/**
 * @summary The Extension Addition Component Types of AuditInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuditInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AuditInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuditInfo */
let _cached_decoder_for_AuditInfo: $.ASN1Decoder<AuditInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuditInfo */

/* START_OF_SYMBOL_DEFINITION _decode_AuditInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) AuditInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuditInfo} The decoded data structure.
 */
export function _decode_AuditInfo(el: _Element) {
    if (!_cached_decoder_for_AuditInfo) {
        _cached_decoder_for_AuditInfo = function (el: _Element): AuditInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AuditInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'service';
            sequence[1].name = 'auditDetails';
            let service!: OBJECT_IDENTIFIER;
            let auditDetails!: _Element;
            service = $._decodeObjectIdentifier(sequence[0]);
            auditDetails = $._decodeAny(sequence[1]);
            return new AuditInfo(service, auditDetails);
        };
    }
    return _cached_decoder_for_AuditInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuditInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuditInfo */
let _cached_encoder_for_AuditInfo: $.ASN1Encoder<AuditInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuditInfo */

/* START_OF_SYMBOL_DEFINITION _encode_AuditInfo */
/**
 * @summary Encodes a(n) AuditInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditInfo, encoded as an ASN.1 Element.
 */
export function _encode_AuditInfo(
    value: AuditInfo,
    elGetter: $.ASN1Encoder<AuditInfo>
) {
    if (!_cached_encoder_for_AuditInfo) {
        _cached_encoder_for_AuditInfo = function (
            value: AuditInfo,
            elGetter: $.ASN1Encoder<AuditInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.service,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(
                            value.auditDetails,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuditInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuditInfo */

/* eslint-enable */
