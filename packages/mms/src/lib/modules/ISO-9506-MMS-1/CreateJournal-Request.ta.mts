/* eslint-disable */
import {
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


/**
 * @summary CreateJournal_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateJournal-Request ::= SEQUENCE {
 *    journalName         [0] ObjectName   }
 * ```
 * 
 * @class
 */
export
class CreateJournal_Request {
    constructor (
        /**
         * @summary `journalName`.
         * @public
         * @readonly
         */
        readonly journalName: ObjectName
    ) {}

    /**
     * @summary Restructures an object into a CreateJournal_Request
     * @description
     * 
     * This takes an `object` and converts it to a `CreateJournal_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateJournal_Request`.
     * @returns {CreateJournal_Request}
     */
    public static _from_object (_o: { [_K in keyof (CreateJournal_Request)]: (CreateJournal_Request)[_K] }): CreateJournal_Request {
        return new CreateJournal_Request(_o.journalName);
    }


}

/**
 * @summary The Leading Root Component Types of CreateJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateJournal_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("journalName", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CreateJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateJournal_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateJournal_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateJournal_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateJournal_Request: $.ASN1Decoder<CreateJournal_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateJournal_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateJournal_Request (el: _Element): CreateJournal_Request {
    if (!_cached_decoder_for_CreateJournal_Request) { _cached_decoder_for_CreateJournal_Request = function (el: _Element): CreateJournal_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CreateJournal-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "journalName";
    let journalName!: ObjectName;
    journalName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    return new CreateJournal_Request(
        journalName,

    );
}; }
    return _cached_decoder_for_CreateJournal_Request(el);
}

let _cached_encoder_for_CreateJournal_Request: $.ASN1Encoder<CreateJournal_Request> | null = null;

/**
 * @summary Encodes a(n) CreateJournal_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateJournal_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CreateJournal_Request (value: CreateJournal_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateJournal_Request) { _cached_encoder_for_CreateJournal_Request = function (value: CreateJournal_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.journalName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CreateJournal_Request(value, elGetter);
}


/* eslint-enable */
