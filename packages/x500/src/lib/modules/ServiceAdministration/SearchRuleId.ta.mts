/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SearchRuleId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRuleId ::= SEQUENCE {
 *   id          INTEGER,
 *   dmdId  [0]  OBJECT IDENTIFIER }
 * ```
 *
 * @class
 */
export class SearchRuleId {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: INTEGER,
        /**
         * @summary `dmdId`.
         * @public
         * @readonly
         */
        readonly dmdId: OBJECT_IDENTIFIER
    ) {}

    /**
     * @summary Restructures an object into a SearchRuleId
     * @description
     *
     * This takes an `object` and converts it to a `SearchRuleId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRuleId`.
     * @returns {SearchRuleId}
     */
    public static _from_object(
        _o: { [_K in keyof SearchRuleId]: SearchRuleId[_K] }
    ): SearchRuleId {
        return new SearchRuleId(_o.id, _o.dmdId);
    }
}

/**
 * @summary The Leading Root Component Types of SearchRuleId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRuleId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "dmdId",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of SearchRuleId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRuleId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SearchRuleId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRuleId: $.ComponentSpec[] = [];

let _cached_decoder_for_SearchRuleId: $.ASN1Decoder<SearchRuleId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchRuleId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRuleId} The decoded data structure.
 */
export function _decode_SearchRuleId(el: _Element) {
    if (!_cached_decoder_for_SearchRuleId) {
        _cached_decoder_for_SearchRuleId = function (
            el: _Element
        ): SearchRuleId {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SearchRuleId contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "id";
            sequence[1].name = "dmdId";
            let id!: INTEGER;
            let dmdId!: OBJECT_IDENTIFIER;
            id = $._decodeInteger(sequence[0]);
            dmdId = $._decode_explicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[1]);
            return new SearchRuleId(id, dmdId);
        };
    }
    return _cached_decoder_for_SearchRuleId(el);
}

let _cached_encoder_for_SearchRuleId: $.ASN1Encoder<SearchRuleId> | null = null;

/**
 * @summary Encodes a(n) SearchRuleId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRuleId, encoded as an ASN.1 Element.
 */
export function _encode_SearchRuleId(
    value: SearchRuleId,
    elGetter: $.ASN1Encoder<SearchRuleId>
) {
    if (!_cached_encoder_for_SearchRuleId) {
        _cached_encoder_for_SearchRuleId = function (
            value: SearchRuleId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.id, $.DER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.DER
                        )(value.dmdId, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SearchRuleId(value, elGetter);
}


/* eslint-enable */
