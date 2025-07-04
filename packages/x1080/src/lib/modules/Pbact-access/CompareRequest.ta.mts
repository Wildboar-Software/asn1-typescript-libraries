/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import * as $ from '@wildboar/asn1/functional';
import {
    CommonReqComp,
    _decode_CommonReqComp,
    _encode_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/InformationFramework';
import {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from '@wildboar/x500/InformationFramework';
import {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';
import {
    _root_component_type_list_1_spec_for_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';


/**
 * @summary CompareRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareRequest ::= SEQUENCE {
 *   COMPONENTS OF CommonReqComp,
 *   object    [1] DistinguishedName,
 *   purported [2] AttributeValueAssertion,
 *   ... }
 * ```
 *
 */
export class CompareRequest implements CommonReqComp {
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
         * @summary `purported`.
         * @public
         * @readonly
         */
        readonly purported: AttributeValueAssertion,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CompareRequest
     * @description
     *
     * This takes an `object` and converts it to a `CompareRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompareRequest`.
     * @returns {CompareRequest}
     */
    public static _from_object(
        _o: { [_K in keyof CompareRequest]: CompareRequest[_K] }
    ): CompareRequest {
        return new CompareRequest(
            _o.attrCerts,
            _o.serviceId,
            _o.invokId,
            _o.object,
            _o.purported,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CompareRequest: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonReqComp,
    new $.ComponentSpec(
        'object',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'purported',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CompareRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CompareRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CompareRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_CompareRequest: $.ASN1Decoder<CompareRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CompareRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareRequest} The decoded data structure.
 */
export function _decode_CompareRequest(el: _Element): CompareRequest {
    if (!_cached_decoder_for_CompareRequest) {
        _cached_decoder_for_CompareRequest = function (
            el: _Element
        ): CompareRequest {
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let serviceId!: OBJECT_IDENTIFIER;
            let invokId!: INTEGER;
            let object!: DistinguishedName;
            let purported!: AttributeValueAssertion;
            let _unrecognizedExtensionsList: _Element[] = [];
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
                    object = $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                purported: (_el: _Element): void => {
                    purported = $._decode_implicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CompareRequest,
                _extension_additions_list_spec_for_CompareRequest,
                _root_component_type_list_2_spec_for_CompareRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CompareRequest (
                attrCerts,
                serviceId,
                invokId,
                object,
                purported,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CompareRequest(el);
}


let _cached_encoder_for_CompareRequest: $.ASN1Encoder<CompareRequest> | null = null;


/**
 * @summary Encodes a(n) CompareRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareRequest, encoded as an ASN.1 Element.
 */
export function _encode_CompareRequest(
    value: CompareRequest,
    elGetter: $.ASN1Encoder<CompareRequest>
): _Element {
    if (!_cached_encoder_for_CompareRequest) {
        _cached_encoder_for_CompareRequest = function (
            value: CompareRequest        ): _Element {
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
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.object, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                2,
                                () => _encode_AttributeValueAssertion,
                                $.BER
                            )(value.purported, $.BER),
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
    return _cached_encoder_for_CompareRequest(value, elGetter);
}


/* eslint-enable */
