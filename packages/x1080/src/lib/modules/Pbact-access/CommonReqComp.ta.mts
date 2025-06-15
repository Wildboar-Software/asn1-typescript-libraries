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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';

/**
 * @summary CommonReqComp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonReqComp ::= SEQUENCE {
 *   attrCerts [31]  AttributeCertificates OPTIONAL,
 *   serviceId [30]  OBJECT IDENTIFIER,
 *   invokId   [29]  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class CommonReqComp {
    constructor(
        /**
         * @summary `attrCerts`.
         * @public
         * @readonly
         */
        readonly attrCerts: OPTIONAL<AttributeCertificates>,
        /**
         * @summary `serviceId`.
         * @public
         * @readonly
         */
        readonly serviceId: OBJECT_IDENTIFIER,
        /**
         * @summary `invokId`.
         * @public
         * @readonly
         */
        readonly invokId: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonReqComp
     * @description
     *
     * This takes an `object` and converts it to a `CommonReqComp`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonReqComp`.
     * @returns {CommonReqComp}
     */
    public static _from_object(
        _o: { [_K in keyof CommonReqComp]: CommonReqComp[_K] }
    ): CommonReqComp {
        return new CommonReqComp(
            _o.attrCerts,
            _o.serviceId,
            _o.invokId,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of CommonReqComp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommonReqComp: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attrCerts',
        true,
        $.hasTag(_TagClass.context, 31),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'serviceId',
        false,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'invokId',
        false,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
];


/**
 * @summary The Trailing Root Component Types of CommonReqComp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommonReqComp: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CommonReqComp
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommonReqComp: $.ComponentSpec[] = [];


let _cached_decoder_for_CommonReqComp: $.ASN1Decoder<CommonReqComp> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CommonReqComp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonReqComp} The decoded data structure.
 */
export function _decode_CommonReqComp(el: _Element) {
    if (!_cached_decoder_for_CommonReqComp) {
        _cached_decoder_for_CommonReqComp = function (
            el: _Element
        ): CommonReqComp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let serviceId!: OBJECT_IDENTIFIER;
            let invokId!: INTEGER;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CommonReqComp,
                _extension_additions_list_spec_for_CommonReqComp,
                _root_component_type_list_2_spec_for_CommonReqComp,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CommonReqComp /* SEQUENCE_CONSTRUCTOR_CALL */(
                attrCerts,
                serviceId,
                invokId,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CommonReqComp(el);
}


let _cached_encoder_for_CommonReqComp: $.ASN1Encoder<CommonReqComp> | null = null;


/**
 * @summary Encodes a(n) CommonReqComp into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonReqComp, encoded as an ASN.1 Element.
 */
export function _encode_CommonReqComp(
    value: CommonReqComp,
    elGetter: $.ASN1Encoder<CommonReqComp>
) {
    if (!_cached_encoder_for_CommonReqComp) {
        _cached_encoder_for_CommonReqComp = function (
            value: CommonReqComp        ): _Element {
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
    return _cached_encoder_for_CommonReqComp(value, elGetter);
}


/* eslint-enable */
