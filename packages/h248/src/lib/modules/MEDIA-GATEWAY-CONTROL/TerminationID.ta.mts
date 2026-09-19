/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WildcardField, _decode_WildcardField, _encode_WildcardField } from "../MEDIA-GATEWAY-CONTROL/WildcardField.ta.mjs";
// export { WildcardField, _decode_WildcardField, _encode_WildcardField } from "../MEDIA-GATEWAY-CONTROL/WildcardField.ta.mjs";


/**
 * @summary TerminationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationID ::= SEQUENCE
 *     {
 *         wildcard                    [0] SEQUENCE OF WildcardField,
 *         id                            [1] OCTET STRING(SIZE(1..8)),
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class TerminationID {
    constructor (
        /**
         * @summary `wildcard`.
         * @public
         * @readonly
         */
        readonly wildcard: WildcardField[],
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TerminationID
     * @description
     * 
     * This takes an `object` and converts it to a `TerminationID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminationID`.
     * @returns {TerminationID}
     */
    public static _from_object (_o: { [_K in keyof (TerminationID)]: (TerminationID)[_K] }): TerminationID {
        return new TerminationID(_o.wildcard, _o.id, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TerminationID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminationID: $.ComponentSpec[] = [
    new $.ComponentSpec("wildcard", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TerminationID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminationID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminationID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminationID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminationID: $.ASN1Decoder<TerminationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationID (el: _Element): TerminationID {
    if (!_cached_decoder_for_TerminationID) { _cached_decoder_for_TerminationID = function (el: _Element): TerminationID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TerminationID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "wildcard";
    sequence[1].name = "id";
    let wildcard!: WildcardField[];
    let id!: OCTET_STRING;
    wildcard = $._decode_implicit<WildcardField[]>(() => $._decodeSequenceOf<WildcardField>(() => _decode_WildcardField))(sequence[0]);
    id = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new TerminationID(
        wildcard,
        id,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TerminationID(el);
}

let _cached_encoder_for_TerminationID: $.ASN1Encoder<TerminationID> | null = null;

/**
 * @summary Encodes a(n) TerminationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationID, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationID (value: TerminationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationID) { _cached_encoder_for_TerminationID = function (value: TerminationID, elGetter: $.ASN1Encoder<TerminationID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<WildcardField>(() => _encode_WildcardField, $.BER), $.BER)(value.wildcard, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.id, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminationID(value, elGetter);
}


/* eslint-enable */
