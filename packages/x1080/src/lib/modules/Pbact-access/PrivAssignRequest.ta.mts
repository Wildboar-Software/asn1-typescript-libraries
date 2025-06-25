/* eslint-disable */
import {
    OPTIONAL,
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
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';

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
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of PrivAssignRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivAssignRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PrivAssignRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivAssignRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_PrivAssignRequest: $.ASN1Decoder<PrivAssignRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignRequest} The decoded data structure.
 */
export function _decode_PrivAssignRequest(el: _Element): PrivAssignRequest {
    if (!_cached_decoder_for_PrivAssignRequest) {
        _cached_decoder_for_PrivAssignRequest = function (
            el: _Element
        ): PrivAssignRequest {
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                attrCerts: (_el: _Element): void => {
                    attrCerts = $._decode_implicit<AttributeCertificates>(
                        () => _decode_AttributeCertificates
                    )(_el);
                },
            };
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
            return new PrivAssignRequest (
                attrCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivAssignRequest(el);
}


let _cached_encoder_for_PrivAssignRequest: $.ASN1Encoder<PrivAssignRequest> | null = null;


/**
 * @summary Encodes a(n) PrivAssignRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignRequest, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignRequest(
    value: PrivAssignRequest,
    elGetter: $.ASN1Encoder<PrivAssignRequest>
): _Element {
    if (!_cached_encoder_for_PrivAssignRequest) {
        _cached_encoder_for_PrivAssignRequest = function (
            value: PrivAssignRequest        ): _Element {
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


/* eslint-enable */
