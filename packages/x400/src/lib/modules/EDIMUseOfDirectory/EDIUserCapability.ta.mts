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
    EDIBodyPartType,
    _decode_EDIBodyPartType,
    _encode_EDIBodyPartType,
} from '../EDIMSInformationObjects/EDIBodyPartType.ta.mjs';
import {
    EDIProcessableDocument,
    _decode_EDIProcessableDocument,
    _encode_EDIProcessableDocument,
} from '../EDIMUseOfDirectory/EDIProcessableDocument.ta.mjs';
/**
 * @summary EDIUserCapability
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIUserCapability ::= SEQUENCE {
 *   edi-bodypart-type         [0]  EDIBodyPartType OPTIONAL,
 *   edi-processable-document  [1]  EDIProcessableDocument OPTIONAL
 * }
 * ```
 *
 */
export class EDIUserCapability {
    constructor(
        /**
         * @summary `edi_bodypart_type`.
         * @public
         * @readonly
         */
        readonly edi_bodypart_type: OPTIONAL<EDIBodyPartType>,
        /**
         * @summary `edi_processable_document`.
         * @public
         * @readonly
         */
        readonly edi_processable_document: OPTIONAL<EDIProcessableDocument>
    ) {}

    /**
     * @summary Restructures an object into a EDIUserCapability
     * @description
     *
     * This takes an `object` and converts it to a `EDIUserCapability`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIUserCapability`.
     * @returns {EDIUserCapability}
     */
    public static _from_object(
        _o: { [_K in keyof EDIUserCapability]: EDIUserCapability[_K] }
    ): EDIUserCapability {
        return new EDIUserCapability(
            _o.edi_bodypart_type,
            _o.edi_processable_document
        );
    }
}

/**
 * @summary The Leading Root Component Types of EDIUserCapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIUserCapability: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'edi-bodypart-type',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'edi-processable-document',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of EDIUserCapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIUserCapability: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of EDIUserCapability
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIUserCapability: $.ComponentSpec[] = [];

let _cached_decoder_for_EDIUserCapability: $.ASN1Decoder<EDIUserCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIUserCapability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIUserCapability} The decoded data structure.
 */
export function _decode_EDIUserCapability(el: _Element): EDIUserCapability {
    if (!_cached_decoder_for_EDIUserCapability) {
        _cached_decoder_for_EDIUserCapability = function (
            el: _Element
        ): EDIUserCapability {
            let edi_bodypart_type: OPTIONAL<EDIBodyPartType>;
            let edi_processable_document: OPTIONAL<EDIProcessableDocument>;
            const callbacks: $.DecodingMap = {
                'edi-bodypart-type': (_el: _Element): void => {
                    edi_bodypart_type = $._decode_implicit<EDIBodyPartType>(
                        () => _decode_EDIBodyPartType
                    )(_el);
                },
                'edi-processable-document': (_el: _Element): void => {
                    edi_processable_document = $._decode_implicit<EDIProcessableDocument>(
                        () => _decode_EDIProcessableDocument
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIUserCapability,
                _extension_additions_list_spec_for_EDIUserCapability,
                _root_component_type_list_2_spec_for_EDIUserCapability,
                undefined
            );
            return new EDIUserCapability (
                edi_bodypart_type,
                edi_processable_document
            );
        };
    }
    return _cached_decoder_for_EDIUserCapability(el);
}

let _cached_encoder_for_EDIUserCapability: $.ASN1Encoder<EDIUserCapability> | null = null;

/**
 * @summary Encodes a(n) EDIUserCapability into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIUserCapability, encoded as an ASN.1 Element.
 */
export function _encode_EDIUserCapability(
    value: EDIUserCapability,
    elGetter: $.ASN1Encoder<EDIUserCapability>
): _Element {
    if (!_cached_encoder_for_EDIUserCapability) {
        _cached_encoder_for_EDIUserCapability = function (
            value: EDIUserCapability        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.edi_bodypart_type === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EDIBodyPartType,
                                  $.BER
                              )(value.edi_bodypart_type, $.BER),
                        /* IF_ABSENT  */ value.edi_processable_document ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EDIProcessableDocument,
                                  $.BER
                              )(value.edi_processable_document, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EDIUserCapability(value, elGetter);
}


/* eslint-enable */
