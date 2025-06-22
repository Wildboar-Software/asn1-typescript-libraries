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
    ObjectModification,
    _decode_ObjectModification,
    _encode_ObjectModification,
} from '../Pbact-access/ObjectModification.ta.mjs';
import {
    InformationSelection,
    _decode_InformationSelection,
    _encode_InformationSelection,
} from '../Pbact-access/InformationSelection.ta.mjs';
import {
    AttributeCertificates,
    _decode_AttributeCertificates,
    _encode_AttributeCertificates,
} from '../Pbact-access/AttributeCertificates.ta.mjs';
import {
    _root_component_type_list_1_spec_for_CommonReqComp,
} from '../Pbact-access/CommonReqComp.ta.mjs';


/**
 * @summary ModifyRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest ::= SEQUENCE {
 *   COMPONENTS OF CommonReqComp,
 *   object        DistinguishedName,
 *   changes       SEQUENCE SIZE (1..MAX) OF ObjectModification,
 *   select        InformationSelection,
 *   ... }
 * ```
 *
 * @class
 */
export class ModifyRequest implements CommonReqComp {
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
         * @summary `changes`.
         * @public
         * @readonly
         */
        readonly changes: ObjectModification[],
        /**
         * @summary `select`.
         * @public
         * @readonly
         */
        readonly select: InformationSelection,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyRequest
     * @description
     *
     * This takes an `object` and converts it to a `ModifyRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyRequest`.
     * @returns {ModifyRequest}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyRequest]: ModifyRequest[_K] }
    ): ModifyRequest {
        return new ModifyRequest(
            _o.attrCerts,
            _o.serviceId,
            _o.invokId,
            _o.object,
            _o.changes,
            _o.select,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyRequest: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonReqComp,
    new $.ComponentSpec(
        'object',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'changes',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'select',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_ModifyRequest: $.ASN1Decoder<ModifyRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest} The decoded data structure.
 */
export function _decode_ModifyRequest(el: _Element) {
    if (!_cached_decoder_for_ModifyRequest) {
        _cached_decoder_for_ModifyRequest = function (
            el: _Element
        ): ModifyRequest {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attrCerts: OPTIONAL<AttributeCertificates>;
            let serviceId!: OBJECT_IDENTIFIER;
            let invokId!: INTEGER;
            let object!: DistinguishedName;
            let changes!: ObjectModification[];
            let select!: InformationSelection;
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
                changes: (_el: _Element): void => {
                    changes = $._decodeSequenceOf<ObjectModification>(
                        () => _decode_ObjectModification
                    )(_el);
                },
                select: (_el: _Element): void => {
                    select = _decode_InformationSelection(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ModifyRequest,
                _extension_additions_list_spec_for_ModifyRequest,
                _root_component_type_list_2_spec_for_ModifyRequest,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ModifyRequest /* SEQUENCE_CONSTRUCTOR_CALL */(
                attrCerts,
                serviceId,
                invokId,
                object,
                changes,
                select,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ModifyRequest(el);
}


let _cached_encoder_for_ModifyRequest: $.ASN1Encoder<ModifyRequest> | null = null;


/**
 * @summary Encodes a(n) ModifyRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest(
    value: ModifyRequest,
    elGetter: $.ASN1Encoder<ModifyRequest>
) {
    if (!_cached_encoder_for_ModifyRequest) {
        _cached_encoder_for_ModifyRequest = function (
            value: ModifyRequest        ): _Element {
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
                            /* REQUIRED   */ $._encodeSequenceOf<ObjectModification>(
                                () => _encode_ObjectModification,
                                $.BER
                            )(value.changes, $.BER),
                            /* REQUIRED   */ _encode_InformationSelection(
                                value.select,
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
    return _cached_encoder_for_ModifyRequest(value, elGetter);
}


/* eslint-enable */
