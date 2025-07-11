/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IncrementalStepRefresh,
    _decode_IncrementalStepRefresh,
    _encode_IncrementalStepRefresh,
} from "../DirectoryShadowAbstractService/IncrementalStepRefresh.ta.mjs";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
/**
 * @summary SubordinateChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubordinateChanges ::= SEQUENCE {
 *   subordinate  RelativeDistinguishedName,
 *   changes      IncrementalStepRefresh,
 *   ... }
 * ```
 *
 */
export class SubordinateChanges {
    constructor(
        /**
         * @summary `subordinate`.
         * @public
         * @readonly
         */
        readonly subordinate: RelativeDistinguishedName,
        /**
         * @summary `changes`.
         * @public
         * @readonly
         */
        readonly changes: IncrementalStepRefresh,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubordinateChanges
     * @description
     *
     * This takes an `object` and converts it to a `SubordinateChanges`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubordinateChanges`.
     * @returns {SubordinateChanges}
     */
    public static _from_object(
        _o: { [_K in keyof SubordinateChanges]: SubordinateChanges[_K] }
    ): SubordinateChanges {
        return new SubordinateChanges(
            _o.subordinate,
            _o.changes,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SubordinateChanges
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubordinateChanges: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subordinate",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "changes",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of SubordinateChanges
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubordinateChanges: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SubordinateChanges
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubordinateChanges: $.ComponentSpec[] = [];

let _cached_decoder_for_SubordinateChanges: $.ASN1Decoder<SubordinateChanges> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubordinateChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubordinateChanges} The decoded data structure.
 */
export function _decode_SubordinateChanges(el: _Element): SubordinateChanges {
    if (!_cached_decoder_for_SubordinateChanges) {
        _cached_decoder_for_SubordinateChanges = function (
            el: _Element
        ): SubordinateChanges {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubordinateChanges contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subordinate";
            sequence[1].name = "changes";
            let subordinate!: RelativeDistinguishedName;
            let changes!: IncrementalStepRefresh;
            subordinate = _decode_RelativeDistinguishedName(sequence[0]);
            changes = _decode_IncrementalStepRefresh(sequence[1]);
            return new SubordinateChanges(
                subordinate,
                changes,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SubordinateChanges(el);
}

let _cached_encoder_for_SubordinateChanges: $.ASN1Encoder<SubordinateChanges> | null = null;

/**
 * @summary Encodes a(n) SubordinateChanges into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubordinateChanges, encoded as an ASN.1 Element.
 */
export function _encode_SubordinateChanges(
    value: SubordinateChanges,
    elGetter: $.ASN1Encoder<SubordinateChanges>
): _Element {
    if (!_cached_encoder_for_SubordinateChanges) {
        _cached_encoder_for_SubordinateChanges = function (
            value: SubordinateChanges        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.subordinate,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_IncrementalStepRefresh(
                                value.changes,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SubordinateChanges(value, elGetter);
}


/* eslint-enable */
