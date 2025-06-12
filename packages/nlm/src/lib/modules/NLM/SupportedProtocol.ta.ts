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
    ProtocolVersion,
    _enum_for_ProtocolVersion,
    ProtocolVersion_iSO8208V1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    iSO8208V1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProtocolVersion_iSO8208V2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    iSO8208V2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProtocolVersion_x2584 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    x2584 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProtocolVersion_x2588 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    x2588 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProtocolVersion,
    _encode_ProtocolVersion,
} from '../NLM/ProtocolVersion.ta.js';
export {
    ProtocolVersion,
    _enum_for_ProtocolVersion,
    ProtocolVersion_iSO8208V1 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    iSO8208V1 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProtocolVersion_iSO8208V2 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    iSO8208V2 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProtocolVersion_x2584 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    x2584 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ProtocolVersion_x2588 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    x2588 /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ProtocolVersion,
    _encode_ProtocolVersion,
} from '../NLM/ProtocolVersion.ta.js';

/* START_OF_SYMBOL_DEFINITION SupportedProtocol */
/**
 * @summary SupportedProtocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedProtocol ::= SEQUENCE {
 *   protocol         [1]  OBJECT IDENTIFIER,
 *   versions         [2]  SET OF ProtocolVersion,
 *   defectsRepaired  [3]  SET OF OBJECT IDENTIFIER OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SupportedProtocol {
    constructor(
        /**
         * @summary `protocol`.
         * @public
         * @readonly
         */
        readonly protocol: OBJECT_IDENTIFIER,
        /**
         * @summary `versions`.
         * @public
         * @readonly
         */
        readonly versions: ProtocolVersion[],
        /**
         * @summary `defectsRepaired`.
         * @public
         * @readonly
         */
        readonly defectsRepaired: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {}

    /**
     * @summary Restructures an object into a SupportedProtocol
     * @description
     *
     * This takes an `object` and converts it to a `SupportedProtocol`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedProtocol`.
     * @returns {SupportedProtocol}
     */
    public static _from_object(
        _o: { [_K in keyof SupportedProtocol]: SupportedProtocol[_K] }
    ): SupportedProtocol {
        return new SupportedProtocol(
            _o.protocol,
            _o.versions,
            _o.defectsRepaired
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SupportedProtocol */
/**
 * @summary The Leading Root Component Types of SupportedProtocol
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupportedProtocol: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'protocol',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'versions',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'defectsRepaired',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SupportedProtocol */
/**
 * @summary The Trailing Root Component Types of SupportedProtocol
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupportedProtocol: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SupportedProtocol */
/**
 * @summary The Extension Addition Component Types of SupportedProtocol
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupportedProtocol: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedProtocol */
let _cached_decoder_for_SupportedProtocol: $.ASN1Decoder<SupportedProtocol> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedProtocol */
/**
 * @summary Decodes an ASN.1 element into a(n) SupportedProtocol
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedProtocol} The decoded data structure.
 */
export function _decode_SupportedProtocol(el: _Element) {
    if (!_cached_decoder_for_SupportedProtocol) {
        _cached_decoder_for_SupportedProtocol = function (
            el: _Element
        ): SupportedProtocol {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol!: OBJECT_IDENTIFIER;
            let versions!: ProtocolVersion[];
            let defectsRepaired: OPTIONAL<OBJECT_IDENTIFIER[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protocol: (_el: _Element): void => {
                    protocol = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                versions: (_el: _Element): void => {
                    versions = $._decode_implicit<ProtocolVersion[]>(() =>
                        $._decodeSetOf<ProtocolVersion>(
                            () => _decode_ProtocolVersion
                        )
                    )(_el);
                },
                defectsRepaired: (_el: _Element): void => {
                    defectsRepaired = $._decode_implicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupportedProtocol,
                _extension_additions_list_spec_for_SupportedProtocol,
                _root_component_type_list_2_spec_for_SupportedProtocol,
                undefined
            );
            return new SupportedProtocol /* SEQUENCE_CONSTRUCTOR_CALL */(
                protocol,
                versions,
                defectsRepaired
            );
        };
    }
    return _cached_decoder_for_SupportedProtocol(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedProtocol */
let _cached_encoder_for_SupportedProtocol: $.ASN1Encoder<SupportedProtocol> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedProtocol */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedProtocol */
/**
 * @summary Encodes a(n) SupportedProtocol into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedProtocol, encoded as an ASN.1 Element.
 */
export function _encode_SupportedProtocol(
    value: SupportedProtocol,
    elGetter: $.ASN1Encoder<SupportedProtocol>
) {
    if (!_cached_encoder_for_SupportedProtocol) {
        _cached_encoder_for_SupportedProtocol = function (
            value: SupportedProtocol,
            elGetter: $.ASN1Encoder<SupportedProtocol>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.protocol, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () =>
                                $._encodeSetOf<ProtocolVersion>(
                                    () => _encode_ProtocolVersion,
                                    $.BER
                                ),
                            $.BER
                        )(value.versions, $.BER),
                        /* IF_ABSENT  */ value.defectsRepaired === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSetOf<OBJECT_IDENTIFIER>(
                                          () => $._encodeObjectIdentifier,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.defectsRepaired, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SupportedProtocol(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupportedProtocol */

/* eslint-enable */
