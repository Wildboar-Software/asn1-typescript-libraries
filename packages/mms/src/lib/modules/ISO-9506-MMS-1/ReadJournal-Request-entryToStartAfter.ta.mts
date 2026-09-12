/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";


/**
 * @summary ReadJournal_Request_entryToStartAfter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadJournal-Request-entryToStartAfter ::= SEQUENCE {
 *     timeSpecification [0] IMPLICIT TimeOfDay,
 *     entrySpecification [1] IMPLICIT OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class ReadJournal_Request_entryToStartAfter {
    constructor (
        /**
         * @summary `timeSpecification`.
         * @public
         * @readonly
         */
        readonly timeSpecification: TimeOfDay,
        /**
         * @summary `entrySpecification`.
         * @public
         * @readonly
         */
        readonly entrySpecification: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ReadJournal_Request_entryToStartAfter
     * @description
     * 
     * This takes an `object` and converts it to a `ReadJournal_Request_entryToStartAfter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReadJournal_Request_entryToStartAfter`.
     * @returns {ReadJournal_Request_entryToStartAfter}
     */
    public static _from_object (_o: { [_K in keyof (ReadJournal_Request_entryToStartAfter)]: (ReadJournal_Request_entryToStartAfter)[_K] }): ReadJournal_Request_entryToStartAfter {
        return new ReadJournal_Request_entryToStartAfter(_o.timeSpecification, _o.entrySpecification);
    }


}

/**
 * @summary The Leading Root Component Types of ReadJournal_Request_entryToStartAfter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReadJournal_Request_entryToStartAfter: $.ComponentSpec[] = [
    new $.ComponentSpec("timeSpecification", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entrySpecification", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReadJournal_Request_entryToStartAfter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReadJournal_Request_entryToStartAfter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReadJournal_Request_entryToStartAfter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReadJournal_Request_entryToStartAfter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReadJournal_Request_entryToStartAfter: $.ASN1Decoder<ReadJournal_Request_entryToStartAfter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadJournal_Request_entryToStartAfter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadJournal_Request_entryToStartAfter (el: _Element): ReadJournal_Request_entryToStartAfter {
    if (!_cached_decoder_for_ReadJournal_Request_entryToStartAfter) { _cached_decoder_for_ReadJournal_Request_entryToStartAfter = function (el: _Element): ReadJournal_Request_entryToStartAfter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ReadJournal-Request-entryToStartAfter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "timeSpecification";
    sequence[1].name = "entrySpecification";
    let timeSpecification!: TimeOfDay;
    let entrySpecification!: OCTET_STRING;
    timeSpecification = $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay)(sequence[0]);
    entrySpecification = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new ReadJournal_Request_entryToStartAfter(
        timeSpecification,
        entrySpecification,

    );
}; }
    return _cached_decoder_for_ReadJournal_Request_entryToStartAfter(el);
}

let _cached_encoder_for_ReadJournal_Request_entryToStartAfter: $.ASN1Encoder<ReadJournal_Request_entryToStartAfter> | null = null;

/**
 * @summary Encodes a(n) ReadJournal_Request_entryToStartAfter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadJournal_Request_entryToStartAfter, encoded as an ASN.1 Element.
 */
export
function _encode_ReadJournal_Request_entryToStartAfter (value: ReadJournal_Request_entryToStartAfter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadJournal_Request_entryToStartAfter) { _cached_encoder_for_ReadJournal_Request_entryToStartAfter = function (value: ReadJournal_Request_entryToStartAfter): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TimeOfDay, $.BER)(value.timeSpecification, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.entrySpecification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReadJournal_Request_entryToStartAfter(value, elGetter);
}


/* eslint-enable */
