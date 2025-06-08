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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    RDNInfo,
    _decode_RDNInfo,
    _encode_RDNInfo,
} from '../DiscoveryASN1Module/RDNInfo.ta';
export {
    RDNInfo,
    _decode_RDNInfo,
    _encode_RDNInfo,
} from '../DiscoveryASN1Module/RDNInfo.ta';

/* START_OF_SYMBOL_DEFINITION NameTree */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary NameTree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameTree ::= SEQUENCE {
 *   rdnInfo       RDNInfo,
 *   subordinates  SET OF NameTree OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NameTree {
    constructor(
        /**
         * @summary `rdnInfo`.
         * @public
         * @readonly
         */
        readonly rdnInfo: RDNInfo,
        /**
         * @summary `subordinates`.
         * @public
         * @readonly
         */
        readonly subordinates: OPTIONAL<NameTree[]>
    ) {}

    /**
     * @summary Restructures an object into a NameTree
     * @description
     *
     * This takes an `object` and converts it to a `NameTree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameTree`.
     * @returns {NameTree}
     */
    public static _from_object(
        _o: { [_K in keyof NameTree]: NameTree[_K] }
    ): NameTree {
        return new NameTree(_o.rdnInfo, _o.subordinates);
    }
}
/* END_OF_SYMBOL_DEFINITION NameTree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameTree */
/**
 * @summary The Leading Root Component Types of NameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameTree: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'rdnInfo',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'subordinates',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameTree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameTree */
/**
 * @summary The Trailing Root Component Types of NameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameTree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameTree */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameTree */
/**
 * @summary The Extension Addition Component Types of NameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameTree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameTree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameTree */
let _cached_decoder_for_NameTree: $.ASN1Decoder<NameTree> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameTree */

/* START_OF_SYMBOL_DEFINITION _decode_NameTree */
/**
 * @summary Decodes an ASN.1 element into a(n) NameTree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameTree} The decoded data structure.
 */
export function _decode_NameTree(el: _Element) {
    if (!_cached_decoder_for_NameTree) {
        _cached_decoder_for_NameTree = function (el: _Element): NameTree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdnInfo!: RDNInfo;
            let subordinates: OPTIONAL<NameTree[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rdnInfo: (_el: _Element): void => {
                    rdnInfo = _decode_RDNInfo(_el);
                },
                subordinates: (_el: _Element): void => {
                    subordinates = $._decodeSetOf<NameTree>(
                        () => _decode_NameTree
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameTree,
                _extension_additions_list_spec_for_NameTree,
                _root_component_type_list_2_spec_for_NameTree,
                undefined
            );
            return new NameTree /* SEQUENCE_CONSTRUCTOR_CALL */(
                rdnInfo,
                subordinates
            );
        };
    }
    return _cached_decoder_for_NameTree(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameTree */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameTree */
let _cached_encoder_for_NameTree: $.ASN1Encoder<NameTree> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameTree */

/* START_OF_SYMBOL_DEFINITION _encode_NameTree */
/**
 * @summary Encodes a(n) NameTree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameTree, encoded as an ASN.1 Element.
 */
export function _encode_NameTree(
    value: NameTree,
    elGetter: $.ASN1Encoder<NameTree>
) {
    if (!_cached_encoder_for_NameTree) {
        _cached_encoder_for_NameTree = function (
            value: NameTree,
            elGetter: $.ASN1Encoder<NameTree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RDNInfo(value.rdnInfo, $.BER),
                        /* IF_ABSENT  */ value.subordinates === undefined
                            ? undefined
                            : $._encodeSetOf<NameTree>(
                                  () => _encode_NameTree,
                                  $.BER
                              )(value.subordinates, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NameTree(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameTree */

/* eslint-enable */
