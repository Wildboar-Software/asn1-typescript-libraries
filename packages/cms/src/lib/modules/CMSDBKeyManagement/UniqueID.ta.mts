/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UniqueID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniqueID{DBEKM:IOSet} ::= SEQUENCE {
 * name    DBEKM.&id({IOSet}),
 * type    DBEKM.&Type({IOSet}{@name}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class UniqueID {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OBJECT_IDENTIFIER,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a UniqueID
     * @description
     *
     * This takes an `object` and converts it to a `UniqueID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniqueID`.
     * @returns {UniqueID}
     */
    public static _from_object(
        _o: { [_K in keyof UniqueID]: UniqueID[_K] }
    ): UniqueID {
        return new UniqueID(_o.name, _o.type_);
    }
}


/**
 * @summary The Leading Root Component Types of UniqueID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniqueID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "type",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of UniqueID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniqueID: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UniqueID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniqueID: $.ComponentSpec[] = [];


let _cached_decoder_for_UniqueID: $.ASN1Decoder<UniqueID> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UniqueID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniqueID} The decoded data structure.
 */
export function _decode_UniqueID(el: _Element): UniqueID {
    if (!_cached_decoder_for_UniqueID) {
        _cached_decoder_for_UniqueID = function (el: _Element): UniqueID {
            let name!: OBJECT_IDENTIFIER;
            let type_: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = $._decodeObjectIdentifier(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decodeAny(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniqueID,
                _extension_additions_list_spec_for_UniqueID,
                _root_component_type_list_2_spec_for_UniqueID,
                undefined
            );
            return new UniqueID (name, type_);
        };
    }
    return _cached_decoder_for_UniqueID(el);
}


let _cached_encoder_for_UniqueID: $.ASN1Encoder<UniqueID> | null = null;


/**
 * @summary Encodes a(n) UniqueID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniqueID, encoded as an ASN.1 Element.
 */
export function _encode_UniqueID(
    value: UniqueID,
    elGetter: $.ASN1Encoder<UniqueID>
): _Element {
    if (!_cached_encoder_for_UniqueID) {
        _cached_encoder_for_UniqueID = function (
            value: UniqueID        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.name,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.type_ === undefined
                            ? undefined
                            : $._encodeAny(value.type_, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_UniqueID(value, elGetter);
}


/* eslint-enable */
