/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary LoadDomainContent_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadDomainContent-Request ::= SEQUENCE {
 *    domainName                 [0] IMPLICIT Identifier,
 *    listOfCapabilities         [1] IMPLICIT SEQUENCE OF MMSString OPTIONAL,
 *    sharable                   [2] IMPLICIT BOOLEAN,
 *    fileName                   [4] IMPLICIT FileName
 * ,  thirdParty                 [5] IMPLICIT ApplicationReference OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class LoadDomainContent_Request {
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
        readonly fileName: FileName,
        /**
         * @summary `thirdParty`.
         * @public
         * @readonly
         */
        readonly thirdParty: OPTIONAL<ApplicationReference>
    ) {}

    /**
     * @summary Restructures an object into a LoadDomainContent_Request
     * @description
     * 
     * This takes an `object` and converts it to a `LoadDomainContent_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoadDomainContent_Request`.
     * @returns {LoadDomainContent_Request}
     */
    public static _from_object (_o: { [_K in keyof (LoadDomainContent_Request)]: (LoadDomainContent_Request)[_K] }): LoadDomainContent_Request {
        return new LoadDomainContent_Request(_o.domainName, _o.listOfCapabilities, _o.sharable, _o.fileName, _o.thirdParty);
    }


}

/**
 * @summary The Leading Root Component Types of LoadDomainContent_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LoadDomainContent_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfCapabilities", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sharable", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("thirdParty", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of LoadDomainContent_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LoadDomainContent_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LoadDomainContent_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LoadDomainContent_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LoadDomainContent_Request: $.ASN1Decoder<LoadDomainContent_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadDomainContent_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadDomainContent_Request (el: _Element): LoadDomainContent_Request {
    if (!_cached_decoder_for_LoadDomainContent_Request) { _cached_decoder_for_LoadDomainContent_Request = function (el: _Element): LoadDomainContent_Request {
    let domainName!: Identifier;
    let listOfCapabilities: OPTIONAL<MMSString[]>;
    let sharable!: BOOLEAN;
    let fileName!: FileName;
    let thirdParty: OPTIONAL<ApplicationReference>;
    const callbacks: $.DecodingMap = {
        "domainName": (_el: _Element): void => { domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "listOfCapabilities": (_el: _Element): void => { listOfCapabilities = $._decode_implicit<MMSString[]>(() => $._decodeSequenceOf<MMSString>(() => _decode_MMSString))(_el); },
        "sharable": (_el: _Element): void => { sharable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "fileName": (_el: _Element): void => { fileName = $._decode_implicit<FileName>(() => _decode_FileName)(_el); },
        "thirdParty": (_el: _Element): void => { thirdParty = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LoadDomainContent_Request,
        _extension_additions_list_spec_for_LoadDomainContent_Request,
        _root_component_type_list_2_spec_for_LoadDomainContent_Request,
        undefined,
    );
    return new LoadDomainContent_Request(
        domainName,
        listOfCapabilities,
        sharable,
        fileName,
        thirdParty
    );
}; }
    return _cached_decoder_for_LoadDomainContent_Request(el);
}

let _cached_encoder_for_LoadDomainContent_Request: $.ASN1Encoder<LoadDomainContent_Request> | null = null;

/**
 * @summary Encodes a(n) LoadDomainContent_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadDomainContent_Request, encoded as an ASN.1 Element.
 */
export
function _encode_LoadDomainContent_Request (value: LoadDomainContent_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadDomainContent_Request) { _cached_encoder_for_LoadDomainContent_Request = function (value: LoadDomainContent_Request, elGetter: $.ASN1Encoder<LoadDomainContent_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* IF_ABSENT  */ ((value.listOfCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSString>(() => _encode_MMSString, $.BER), $.BER)(value.listOfCapabilities, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.sharable, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_FileName, $.BER)(value.fileName, $.BER),
            /* IF_ABSENT  */ ((value.thirdParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ApplicationReference, $.BER)(value.thirdParty, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LoadDomainContent_Request(value, elGetter);
}


/* eslint-enable */
