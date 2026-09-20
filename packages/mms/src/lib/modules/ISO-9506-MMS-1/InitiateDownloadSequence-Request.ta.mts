/* eslint-disable */
import {
    BOOLEAN,
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary InitiateDownloadSequence_Request
 * @description
 * 
 * Client request to create a named Domain and begin a download sequence.
 * Sequence: this service, then N× DownloadSegment (server-requested), then
 * TerminateDownloadSequence. Domain name must be unused. On success the Domain
 * is `loading` and bound to this association; abort before `ready` deletes it.
 * ISO 9506-1:2003 §11.1.4.1, §11.2. ISO 9506-2:2003 §11.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateDownloadSequence-Request ::= SEQUENCE {
 *    domainName                 [0] IMPLICIT Identifier,
 *    listOfCapabilities         [1] IMPLICIT SEQUENCE OF MMSString,
 *    sharable                   [2] IMPLICIT BOOLEAN }
 * ```
 * 
 * @class
 */
export
class InitiateDownloadSequence_Request {
    constructor (
        /**
         * @summary `domainName`.
         * @description
         *
         * Domain to create and load. Must not already exist. ISO 9506-1:2003
         * §11.2.1.1.1.
         *
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `listOfCapabilities`.
         * @description
         *
         * Implementation-specific VMD resource limits for this Domain. Empty
         * list is preferred for interoperability; invalid or unavailable
         * capabilities fail. ISO 9506-1:2003 §11.2.1.1.2.
         *
         * @public
         * @readonly
         */
        readonly listOfCapabilities: MMSString[],
        /**
         * @summary `sharable`.
         * @description
         *
         * True: Domain may be used by more than one Program Invocation. False:
         * at most one. ISO 9506-1:2003 §11.2.1.1.3.
         *
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a InitiateDownloadSequence_Request
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateDownloadSequence_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateDownloadSequence_Request`.
     * @returns {InitiateDownloadSequence_Request}
     */
    public static _from_object (_o: { [_K in keyof (InitiateDownloadSequence_Request)]: (InitiateDownloadSequence_Request)[_K] }): InitiateDownloadSequence_Request {
        return new InitiateDownloadSequence_Request(_o.domainName, _o.listOfCapabilities, _o.sharable);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateDownloadSequence_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfCapabilities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InitiateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateDownloadSequence_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateDownloadSequence_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateDownloadSequence_Request: $.ASN1Decoder<InitiateDownloadSequence_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateDownloadSequence_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateDownloadSequence_Request (el: _Element): InitiateDownloadSequence_Request {
    if (!_cached_decoder_for_InitiateDownloadSequence_Request) { _cached_decoder_for_InitiateDownloadSequence_Request = function (el: _Element): InitiateDownloadSequence_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("InitiateDownloadSequence-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "domainName";
    sequence[1].name = "listOfCapabilities";
    sequence[2].name = "sharable";
    let domainName!: Identifier;
    let listOfCapabilities!: MMSString[];
    let sharable!: BOOLEAN;
    domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    listOfCapabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(sequence[1]);
    sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[2]);
    return new InitiateDownloadSequence_Request(
        domainName,
        listOfCapabilities,
        sharable,

    );
}; }
    return _cached_decoder_for_InitiateDownloadSequence_Request(el);
}

let _cached_encoder_for_InitiateDownloadSequence_Request: $.ASN1Encoder<InitiateDownloadSequence_Request> | null = null;

/**
 * @summary Encodes a(n) InitiateDownloadSequence_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateDownloadSequence_Request, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateDownloadSequence_Request (value: InitiateDownloadSequence_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateDownloadSequence_Request) { _cached_encoder_for_InitiateDownloadSequence_Request = function (value: InitiateDownloadSequence_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfCapabilities, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.sharable, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitiateDownloadSequence_Request(value, elGetter);
}


/* eslint-enable */
