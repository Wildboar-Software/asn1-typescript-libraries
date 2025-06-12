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
import {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.js';
export {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.js';

/* START_OF_SYMBOL_DEFINITION PrivAssignRequest */
/**
 * @summary PrivAssignRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivAssignRequest ::= SEQUENCE {
 *   attrCerts [1]  AttributeCertificates OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class PrivAssignRequest {
    constructor(
        /**
         * @summary `attrCerts`.
         * @public
         * @readonly
         */
        readonly attrCerts: OPTIONAL<AttributeCertificates>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivAssignRequest
     * @description
     *
     * This takes an `object` and converts it to a `PrivAssignRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivAssignRequest`.
     * @returns {PrivAssignRequest}
     */
    public static _from_object(
        _o: { [_K in keyof PrivAssignRequest]: PrivAssignRequest[_K] }
    ): PrivAssignRequest {
        return new PrivAssignRequest(
            _o.attrCerts,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivAssignRequest */
/**
 * @summary The Leading Root Component Types of PrivAssignRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivAssignRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attrCerts',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivAssignRequest */
/**
 * @summary The Trailing Root Component Types of PrivAssignRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivAssignRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivAssignRequest */
/**
 * @summary The Extension Addition Component Types of PrivAssignRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivAssignRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignRequest */
let _cached_decoder_for_PrivAssignRequest: $.ASN1Decoder<PrivAssignRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _decode_PrivAssignRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignRequest} The decoded data structure.
 */
export function _decode_PrivAssignRequest(el: _Element) {
    if (!_cached_decoder_for_PrivAssignRequest) {
        _cached_decoder_for_PrivAssignRequest = function (
            el: _Element
        ): PrivAssignRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attrCerts: (_el: _Element): void => {
                    attrCerts = $._decode_implicit<AttributeCertificates>(
                        () => _decode_AttributeCertificates
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivAssignRequest,
                _extension_additions_list_spec_for_PrivAssignRequest,
                _root_component_type_list_2_spec_for_PrivAssignRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivAssignRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
                attrCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivAssignRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignRequest */
let _cached_encoder_for_PrivAssignRequest: $.ASN1Encoder<PrivAssignRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignRequest */

/* START_OF_SYMBOL_DEFINITION _encode_PrivAssignRequest */
/**
 * @summary Encodes a(n) PrivAssignRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignRequest, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignRequest(
    value: PrivAssignRequest,
    elGetter: $.ASN1Encoder<PrivAssignRequest>
) {
    if (!_cached_encoder_for_PrivAssignRequest) {
        _cached_encoder_for_PrivAssignRequest = function (
            value: PrivAssignRequest,
            elGetter: $.ASN1Encoder<PrivAssignRequest>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.attrCerts === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttributeCertificates,
                                      $.BER
                                  )(value.attrCerts, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PrivAssignRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivAssignRequest */

/* eslint-enable */
