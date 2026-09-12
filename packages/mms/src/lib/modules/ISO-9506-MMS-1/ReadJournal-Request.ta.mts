/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { ReadJournal_Request_rangeStartSpecification, _decode_ReadJournal_Request_rangeStartSpecification, _encode_ReadJournal_Request_rangeStartSpecification } from "../ISO-9506-MMS-1/ReadJournal-Request-rangeStartSpecification.ta.mjs";
// export { ReadJournal_Request_rangeStartSpecification, _decode_ReadJournal_Request_rangeStartSpecification, _encode_ReadJournal_Request_rangeStartSpecification } from "../ISO-9506-MMS-1/ReadJournal-Request-rangeStartSpecification.ta.mjs";
import { ReadJournal_Request_rangeStopSpecification, _decode_ReadJournal_Request_rangeStopSpecification, _encode_ReadJournal_Request_rangeStopSpecification } from "../ISO-9506-MMS-1/ReadJournal-Request-rangeStopSpecification.ta.mjs";
// export { ReadJournal_Request_rangeStopSpecification, _decode_ReadJournal_Request_rangeStopSpecification, _encode_ReadJournal_Request_rangeStopSpecification } from "../ISO-9506-MMS-1/ReadJournal-Request-rangeStopSpecification.ta.mjs";
import { ReadJournal_Request_entryToStartAfter, _decode_ReadJournal_Request_entryToStartAfter, _encode_ReadJournal_Request_entryToStartAfter } from "../ISO-9506-MMS-1/ReadJournal-Request-entryToStartAfter.ta.mjs";
// export { ReadJournal_Request_entryToStartAfter, _decode_ReadJournal_Request_entryToStartAfter, _encode_ReadJournal_Request_entryToStartAfter } from "../ISO-9506-MMS-1/ReadJournal-Request-entryToStartAfter.ta.mjs";


/**
 * @summary ReadJournal_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadJournal-Request ::= SEQUENCE {
 *    journalName                [0] ObjectName,
 *    rangeStartSpecification    [1] CHOICE {
 *        startingTime               [0] IMPLICIT TimeOfDay,
 *        startingEntry              [1] IMPLICIT OCTET STRING } OPTIONAL,
 *    rangeStopSpecification     [2] CHOICE {
 *        endingTime                 [0] IMPLICIT TimeOfDay,
 *        numberOfEntries            [1] IMPLICIT Integer32 } OPTIONAL,
 *    listOfVariables            [4] IMPLICIT SEQUENCE OF VisibleString OPTIONAL,
 *    entryToStartAfter          [5] IMPLICIT SEQUENCE {
 *        timeSpecification          [0] IMPLICIT TimeOfDay,
 *        entrySpecification         [1] IMPLICIT OCTET STRING } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class ReadJournal_Request {
    constructor (
        /**
         * @summary `journalName`.
         * @public
         * @readonly
         */
        readonly journalName: ObjectName,
        /**
         * @summary `rangeStartSpecification`.
         * @public
         * @readonly
         */
        readonly rangeStartSpecification: OPTIONAL<ReadJournal_Request_rangeStartSpecification>,
        /**
         * @summary `rangeStopSpecification`.
         * @public
         * @readonly
         */
        readonly rangeStopSpecification: OPTIONAL<ReadJournal_Request_rangeStopSpecification>,
        /**
         * @summary `listOfVariables`.
         * @public
         * @readonly
         */
        readonly listOfVariables: OPTIONAL<VisibleString[]>,
        /**
         * @summary `entryToStartAfter`.
         * @public
         * @readonly
         */
        readonly entryToStartAfter: OPTIONAL<ReadJournal_Request_entryToStartAfter>
    ) {}

    /**
     * @summary Restructures an object into a ReadJournal_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ReadJournal_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReadJournal_Request`.
     * @returns {ReadJournal_Request}
     */
    public static _from_object (_o: { [_K in keyof (ReadJournal_Request)]: (ReadJournal_Request)[_K] }): ReadJournal_Request {
        return new ReadJournal_Request(_o.journalName, _o.rangeStartSpecification, _o.rangeStopSpecification, _o.listOfVariables, _o.entryToStartAfter);
    }


}

/**
 * @summary The Leading Root Component Types of ReadJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReadJournal_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("journalName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rangeStartSpecification", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rangeStopSpecification", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("listOfVariables", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("entryToStartAfter", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ReadJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReadJournal_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReadJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReadJournal_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReadJournal_Request: $.ASN1Decoder<ReadJournal_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadJournal_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadJournal_Request (el: _Element): ReadJournal_Request {
    if (!_cached_decoder_for_ReadJournal_Request) { _cached_decoder_for_ReadJournal_Request = function (el: _Element): ReadJournal_Request {
    let journalName!: ObjectName;
    let rangeStartSpecification: OPTIONAL<ReadJournal_Request_rangeStartSpecification>;
    let rangeStopSpecification: OPTIONAL<ReadJournal_Request_rangeStopSpecification>;
    let listOfVariables: OPTIONAL<VisibleString[]>;
    let entryToStartAfter: OPTIONAL<ReadJournal_Request_entryToStartAfter>;
    const callbacks: $.DecodingMap = {
        "journalName": (_el: _Element): void => { journalName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "rangeStartSpecification": (_el: _Element): void => { rangeStartSpecification = $._decode_explicit<ReadJournal_Request_rangeStartSpecification>(() => _decode_ReadJournal_Request_rangeStartSpecification)(_el); },
        "rangeStopSpecification": (_el: _Element): void => { rangeStopSpecification = $._decode_explicit<ReadJournal_Request_rangeStopSpecification>(() => _decode_ReadJournal_Request_rangeStopSpecification)(_el); },
        "listOfVariables": (_el: _Element): void => { listOfVariables = $._decode_implicit<VisibleString[]>(() => $._decodeSequenceOf<VisibleString>(() => $._decodeVisibleString))(_el); },
        "entryToStartAfter": (_el: _Element): void => { entryToStartAfter = $._decode_implicit<ReadJournal_Request_entryToStartAfter>(() => _decode_ReadJournal_Request_entryToStartAfter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReadJournal_Request,
        _extension_additions_list_spec_for_ReadJournal_Request,
        _root_component_type_list_2_spec_for_ReadJournal_Request,
        undefined,
    );
    return new ReadJournal_Request(
        journalName,
        rangeStartSpecification,
        rangeStopSpecification,
        listOfVariables,
        entryToStartAfter
    );
}; }
    return _cached_decoder_for_ReadJournal_Request(el);
}

let _cached_encoder_for_ReadJournal_Request: $.ASN1Encoder<ReadJournal_Request> | null = null;

/**
 * @summary Encodes a(n) ReadJournal_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadJournal_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ReadJournal_Request (value: ReadJournal_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadJournal_Request) { _cached_encoder_for_ReadJournal_Request = function (value: ReadJournal_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.journalName, $.BER),
            /* IF_ABSENT  */ ((value.rangeStartSpecification === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ReadJournal_Request_rangeStartSpecification, $.BER)(value.rangeStartSpecification, $.BER)),
            /* IF_ABSENT  */ ((value.rangeStopSpecification === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ReadJournal_Request_rangeStopSpecification, $.BER)(value.rangeStopSpecification, $.BER)),
            /* IF_ABSENT  */ ((value.listOfVariables === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<VisibleString>(() => $._encodeVisibleString, $.BER), $.BER)(value.listOfVariables, $.BER)),
            /* IF_ABSENT  */ ((value.entryToStartAfter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ReadJournal_Request_entryToStartAfter, $.BER)(value.entryToStartAfter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReadJournal_Request(value, elGetter);
}


/* eslint-enable */
