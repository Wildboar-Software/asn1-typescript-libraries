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
    CommonReqComp,
    _decode_CommonReqComp,
    _encode_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';
export {
    CommonReqComp,
    _decode_CommonReqComp,
    _encode_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
import {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';
export {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';
import {
    _root_component_type_list_1_spec_for_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DeleteRequest */
/**
 * @summary DeleteRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteRequest ::= SEQUENCE {
 *   COMPONENTS OF CommonReqComp,
 *   object        DistinguishedName,
 *   ... }
 * ```
 *
 * @class
 */
export class DeleteRequest implements CommonReqComp {
    constructor(
        /**
         * @summary `attrCerts`.
         * @public
         * @readonly
         */
        readonly attrCerts: OPTIONAL<AttributeCertificates> /* REPLICATED_COMPONENT */,
        /**
         * @summary `serviceId`.
         * @public
         * @readonly
         */
        readonly serviceId: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `invokId`.
         * @public
         * @readonly
         */
        readonly invokId: INTEGER /* REPLICATED_COMPONENT */,
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: DistinguishedName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteRequest
     * @description
     *
     * This takes an `object` and converts it to a `DeleteRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteRequest`.
     * @returns {DeleteRequest}
     */
    public static _from_object(
        _o: { [_K in keyof DeleteRequest]: DeleteRequest[_K] }
    ): DeleteRequest {
        return new DeleteRequest(
            _o.attrCerts,
            _o.serviceId,
            _o.invokId,
            _o.object,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteRequest */
/**
 * @summary The Leading Root Component Types of DeleteRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteRequest: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonReqComp,
    new $.ComponentSpec(
        'object',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteRequest */
/**
 * @summary The Trailing Root Component Types of DeleteRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteRequest */
/**
 * @summary The Extension Addition Component Types of DeleteRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteRequest */
let _cached_decoder_for_DeleteRequest: $.ASN1Decoder<DeleteRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteRequest} The decoded data structure.
 */
export function _decode_DeleteRequest(el: _Element) {
    if (!_cached_decoder_for_DeleteRequest) {
        _cached_decoder_for_DeleteRequest = function (
            el: _Element
        ): DeleteRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let serviceId!: OBJECT_IDENTIFIER;
            let invokId!: INTEGER;
            let object!: DistinguishedName;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attrCerts: (_el: _Element): void => {
                    attrCerts = $._decode_implicit<AttributeCertificates>(
                        () => _decode_AttributeCertificates
                    )(_el);
                },
                serviceId: (_el: _Element): void => {
                    serviceId = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                invokId: (_el: _Element): void => {
                    invokId = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                object: (_el: _Element): void => {
                    object = _decode_DistinguishedName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteRequest,
                _extension_additions_list_spec_for_DeleteRequest,
                _root_component_type_list_2_spec_for_DeleteRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeleteRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
                attrCerts,
                serviceId,
                invokId,
                object,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeleteRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteRequest */
let _cached_encoder_for_DeleteRequest: $.ASN1Encoder<DeleteRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteRequest */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteRequest */
/**
 * @summary Encodes a(n) DeleteRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteRequest, encoded as an ASN.1 Element.
 */
export function _encode_DeleteRequest(
    value: DeleteRequest,
    elGetter: $.ASN1Encoder<DeleteRequest>
) {
    if (!_cached_encoder_for_DeleteRequest) {
        _cached_encoder_for_DeleteRequest = function (
            value: DeleteRequest,
            elGetter: $.ASN1Encoder<DeleteRequest>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.attrCerts === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      31,
                                      () => _encode_AttributeCertificates,
                                      $.BER
                                  )(value.attrCerts, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                30,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.serviceId, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                29,
                                () => $._encodeInteger,
                                $.BER
                            )(value.invokId, $.BER),
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.object,
                                $.BER
                            ),
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
    return _cached_encoder_for_DeleteRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteRequest */

/* eslint-enable */
