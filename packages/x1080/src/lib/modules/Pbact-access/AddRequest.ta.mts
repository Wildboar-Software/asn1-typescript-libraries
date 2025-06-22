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
} from '@wildboar/x500/src/lib/modules/InformationFramework/DistinguishedName.ta.mjs';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta.mjs';
import {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';
import {
    _root_component_type_list_1_spec_for_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';


/**
 * @summary AddRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddRequest ::= SEQUENCE {
 *   COMPONENTS OF CommonReqComp,
 *   object    [1] DistinguishedName,
 *   attr      [2] SEQUENCE SIZE (1..MAX) OF Attribute {{SupportedAttributes}}
 *                    OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AddRequest implements CommonReqComp {
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
         * @summary `attr`.
         * @public
         * @readonly
         */
        readonly attr: OPTIONAL<Attribute[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddRequest
     * @description
     *
     * This takes an `object` and converts it to a `AddRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddRequest`.
     * @returns {AddRequest}
     */
    public static _from_object(
        _o: { [_K in keyof AddRequest]: AddRequest[_K] }
    ): AddRequest {
        return new AddRequest(
            _o.attrCerts,
            _o.serviceId,
            _o.invokId,
            _o.object,
            _o.attr,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddRequest: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonReqComp,
    new $.ComponentSpec(
        'object',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'attr',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_AddRequest: $.ASN1Decoder<AddRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddRequest} The decoded data structure.
 */
export function _decode_AddRequest(el: _Element) {
    if (!_cached_decoder_for_AddRequest) {
        _cached_decoder_for_AddRequest = function (el: _Element): AddRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let serviceId!: OBJECT_IDENTIFIER;
            let invokId!: INTEGER;
            let object!: DistinguishedName;
            let attr: OPTIONAL<Attribute[]>;
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
                    object = $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                attr: (_el: _Element): void => {
                    attr = $._decode_implicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AddRequest,
                _extension_additions_list_spec_for_AddRequest,
                _root_component_type_list_2_spec_for_AddRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AddRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
                attrCerts,
                serviceId,
                invokId,
                object,
                attr,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AddRequest(el);
}


let _cached_encoder_for_AddRequest: $.ASN1Encoder<AddRequest> | null = null;


/**
 * @summary Encodes a(n) AddRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddRequest, encoded as an ASN.1 Element.
 */
export function _encode_AddRequest(
    value: AddRequest,
    elGetter: $.ASN1Encoder<AddRequest>
) {
    if (!_cached_encoder_for_AddRequest) {
        _cached_encoder_for_AddRequest = function (
            value: AddRequest        ): _Element {
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
                            /* IF_ABSENT  */ value.attr === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attr, $.BER),
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
    return _cached_encoder_for_AddRequest(value, elGetter);
}


/* eslint-enable */
