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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary LoadDomainContent_Request
 * @description
 * 
 * Client request that the server load a file (local or via third party) into a
 * new Domain. Domain name must not exist. Success leaves the Domain `ready`.
 * ISO 9506-1:2003 §11.10. ISO 9506-2:2003 §11.10.
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
         * @description
         *
         * Name of the Domain to create and load. Must not already exist. ISO 9506-1:2003 §11.10.1.1.1.
         *
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `listOfCapabilities`.
         * @description
         *
         * If present, used when creating the Domain; empty SEQUENCE OF if
         * empty. Omitted if the parameter is absent. ISO 9506-1:2003
         * §11.10.1.1.2. ISO 9506-2:2003 §11.10.1.
         *
         * @public
         * @readonly
         */
        readonly listOfCapabilities: OPTIONAL<MMSString[]>,
        /**
         * @summary `sharable`.
         * @description
         *
         * True if several Program Invocations may use the Domain concurrently.
         * ISO 9506-1:2003 §11.10.1.1.3.
         *
         * @public
         * @readonly
         */
        readonly sharable: BOOLEAN,
        /**
         * @summary `fileName`.
         * @description
         *
         * File containing the Domain content. ISO 9506-1:2003 §11.10.1.1.4.
         *
         * @public
         * @readonly
         */
        readonly fileName: FileName,
        /**
         * @summary `thirdParty`.
         * @description
         *
         * Application that holds the file. Requires `tpy` CBB; use is optional.
         * Absent: local file access. ISO 9506-1:2003 §11.10.1.1.5. ISO 9506-2:2003 §11.10.1.1.
         *
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
    if (!_cached_encoder_for_LoadDomainContent_Request) { _cached_encoder_for_LoadDomainContent_Request = function (value: LoadDomainContent_Request): _Element {
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
