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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';
import {
    NameTree,
    _decode_NameTree,
    _encode_NameTree,
} from '../DiscoveryASN1Module/NameTree.ta.mjs';
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

/**
 * @summary The Leading Root Component Types of RootedNameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RootedNameTree: $.ComponentSpec[] = [
    new $.ComponentSpec('rootObject', false, $.hasAnyTag),
    new $.ComponentSpec(
        'classOfRoot',
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'subordinates',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of RootedNameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RootedNameTree: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RootedNameTree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RootedNameTree: $.ComponentSpec[] = [];

let _cached_decoder_for_RootedNameTree: $.ASN1Decoder<RootedNameTree> | null = null;

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

let _cached_encoder_for_RootedNameTree: $.ASN1Encoder<RootedNameTree> | null = null;

/**
 * @summary Encodes a(n) RootedNameTree into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RootedNameTree, encoded as an ASN.1 Element.
 */
export function _encode_RootedNameTree(
    value: RootedNameTree,
    elGetter: $.ASN1Encoder<RootedNameTree>
) {
    if (!_cached_encoder_for_RootedNameTree) {
        _cached_encoder_for_RootedNameTree = function (
            value: RootedNameTree        ): _Element {
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


/* eslint-enable */
