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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
export {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta';
import {
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta';
export {
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta';
import {
    NameTree,
    _decode_NameTree,
    _encode_NameTree,
} from '../DiscoveryASN1Module/NameTree.ta';
export {
    NameTree,
    _decode_NameTree,
    _encode_NameTree,
} from '../DiscoveryASN1Module/NameTree.ta';

/* START_OF_SYMBOL_DEFINITION RootedNameTree */
/**
 * @summary RootedNameTree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RootedNameTree ::= SEQUENCE {
 *   rootObject    ObjectInstance,
 *   classOfRoot   GdmoObjectClass OPTIONAL,
 *   subordinates  SET OF NameTree OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RootedNameTree {
    constructor(
        /**
         * @summary `rootObject`.
         * @public
         * @readonly
         */
        readonly rootObject: ObjectInstance,
        /**
         * @summary `classOfRoot`.
         * @public
         * @readonly
         */
        readonly classOfRoot: OPTIONAL<GdmoObjectClass>,
        /**
         * @summary `subordinates`.
         * @public
         * @readonly
         */
        readonly subordinates: OPTIONAL<NameTree[]>
    ) {}

    /**
     * @summary Restructures an object into a RootedNameTree
     * @description
     *
     * This takes an `object` and converts it to a `RootedNameTree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RootedNameTree`.
     * @returns {RootedNameTree}
     */
    public static _from_object(
        _o: { [_K in keyof RootedNameTree]: RootedNameTree[_K] }
    ): RootedNameTree {
        return new RootedNameTree(
            _o.rootObject,
            _o.classOfRoot,
            _o.subordinates
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RootedNameTree */
/**
 * @summary The Leading Root Component Types of RootedNameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RootedNameTree: $.ComponentSpec[] = [
    new $.ComponentSpec('rootObject', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'classOfRoot',
        true,
        $.hasTag(_TagClass.universal, 6),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RootedNameTree */
/**
 * @summary The Trailing Root Component Types of RootedNameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RootedNameTree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RootedNameTree */
/**
 * @summary The Extension Addition Component Types of RootedNameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RootedNameTree: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RootedNameTree */
let _cached_decoder_for_RootedNameTree: $.ASN1Decoder<RootedNameTree> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _decode_RootedNameTree */
/**
 * @summary Decodes an ASN.1 element into a(n) RootedNameTree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RootedNameTree} The decoded data structure.
 */
export function _decode_RootedNameTree(el: _Element) {
    if (!_cached_decoder_for_RootedNameTree) {
        _cached_decoder_for_RootedNameTree = function (
            el: _Element
        ): RootedNameTree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rootObject!: ObjectInstance;
            let classOfRoot: OPTIONAL<GdmoObjectClass>;
            let subordinates: OPTIONAL<NameTree[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rootObject: (_el: _Element): void => {
                    rootObject = _decode_ObjectInstance(_el);
                },
                classOfRoot: (_el: _Element): void => {
                    classOfRoot = _decode_GdmoObjectClass(_el);
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
                _root_component_type_list_1_spec_for_RootedNameTree,
                _extension_additions_list_spec_for_RootedNameTree,
                _root_component_type_list_2_spec_for_RootedNameTree,
                undefined
            );
            return new RootedNameTree /* SEQUENCE_CONSTRUCTOR_CALL */(
                rootObject,
                classOfRoot,
                subordinates
            );
        };
    }
    return _cached_decoder_for_RootedNameTree(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RootedNameTree */
let _cached_encoder_for_RootedNameTree: $.ASN1Encoder<RootedNameTree> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RootedNameTree */

/* START_OF_SYMBOL_DEFINITION _encode_RootedNameTree */
/**
 * @summary Encodes a(n) RootedNameTree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RootedNameTree, encoded as an ASN.1 Element.
 */
export function _encode_RootedNameTree(
    value: RootedNameTree,
    elGetter: $.ASN1Encoder<RootedNameTree>
) {
    if (!_cached_encoder_for_RootedNameTree) {
        _cached_encoder_for_RootedNameTree = function (
            value: RootedNameTree,
            elGetter: $.ASN1Encoder<RootedNameTree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.rootObject,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.classOfRoot === undefined
                            ? undefined
                            : _encode_GdmoObjectClass(value.classOfRoot, $.BER),
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
    return _cached_encoder_for_RootedNameTree(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RootedNameTree */

/* eslint-enable */
