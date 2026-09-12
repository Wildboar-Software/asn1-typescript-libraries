/* eslint-disable */
import {
    OPTIONAL,
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
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";


/**
 * @summary RequestDomainDownload_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestDomainDownload-Request ::= SEQUENCE {
 *    domainName                 [0] IMPLICIT Identifier,
 *    listOfCapabilities         [1] IMPLICIT SEQUENCE OF MMSString OPTIONAL,
 *    sharable                   [2] IMPLICIT BOOLEAN,
 *    fileName                   [4] IMPLICIT FileName }
 * ```
 * 
 * @class
 */
export
class RequestDomainDownload_Request {
    constructor (
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `listOfCapabilities`.
         * @public
         * @readonly
         */
        readonly listOfCapabilities: OPTIONAL<MMSString[]>,
        /**
         * @summary `sharable`.
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN,
        /**
         * @summary `fileName`.
         * @public
         * @readonly
         */
        readonly fileName: FileName
    ) {}

    /**
     * @summary Restructures an object into a RequestDomainDownload_Request
     * @description
     * 
     * This takes an `object` and converts it to a `RequestDomainDownload_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestDomainDownload_Request`.
     * @returns {RequestDomainDownload_Request}
     */
    public static _from_object (_o: { [_K in keyof (RequestDomainDownload_Request)]: (RequestDomainDownload_Request)[_K] }): RequestDomainDownload_Request {
        return new RequestDomainDownload_Request(_o.domainName, _o.listOfCapabilities, _o.sharable, _o.fileName);
    }


}

/**
 * @summary The Leading Root Component Types of RequestDomainDownload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestDomainDownload_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfCapabilities", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of RequestDomainDownload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestDomainDownload_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestDomainDownload_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestDomainDownload_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestDomainDownload_Request: $.ASN1Decoder<RequestDomainDownload_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestDomainDownload_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestDomainDownload_Request (el: _Element): RequestDomainDownload_Request {
    if (!_cached_decoder_for_RequestDomainDownload_Request) { _cached_decoder_for_RequestDomainDownload_Request = function (el: _Element): RequestDomainDownload_Request {
    let domainName!: Identifier;
    let listOfCapabilities: OPTIONAL<MMSString[]>;
    let sharable!: BOOLEAN;
    let fileName!: FileName;
    const callbacks: $.DecodingMap = {
        "domainName": (_el: _Element): void => { domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "listOfCapabilities": (_el: _Element): void => { listOfCapabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "sharable": (_el: _Element): void => { sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fileName": (_el: _Element): void => { fileName = $._decode_implicit<FileName>(() => _decode_FileName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestDomainDownload_Request,
        _extension_additions_list_spec_for_RequestDomainDownload_Request,
        _root_component_type_list_2_spec_for_RequestDomainDownload_Request,
        undefined,
    );
    return new RequestDomainDownload_Request(
        domainName,
        listOfCapabilities,
        sharable,
        fileName
    );
}; }
    return _cached_decoder_for_RequestDomainDownload_Request(el);
}

let _cached_encoder_for_RequestDomainDownload_Request: $.ASN1Encoder<RequestDomainDownload_Request> | null = null;

/**
 * @summary Encodes a(n) RequestDomainDownload_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestDomainDownload_Request, encoded as an ASN.1 Element.
 */
export
function _encode_RequestDomainDownload_Request (value: RequestDomainDownload_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestDomainDownload_Request) { _cached_encoder_for_RequestDomainDownload_Request = function (value: RequestDomainDownload_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* IF_ABSENT  */ ((value.listOfCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfCapabilities, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.sharable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_FileName, $.BER)(value.fileName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestDomainDownload_Request(value, elGetter);
}


/* eslint-enable */
