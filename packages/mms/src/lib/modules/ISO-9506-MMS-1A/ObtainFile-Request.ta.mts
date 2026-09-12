/* eslint-disable */
import {
    OPTIONAL,
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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";


/**
 * @summary ObtainFile_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObtainFile-Request ::= SEQUENCE {
 *     sourceFileServer       [0] IMPLICIT ApplicationReference OPTIONAL,
 *     sourceFile             [1] IMPLICIT FileName,
 *     destinationFile        [2] IMPLICIT FileName
 * }
 * ```
 * 
 * @class
 */
export
class ObtainFile_Request {
    constructor (
        /**
         * @summary `sourceFileServer`.
         * @public
         * @readonly
         */
        readonly sourceFileServer: OPTIONAL<ApplicationReference>,
        /**
         * @summary `sourceFile`.
         * @public
         * @readonly
         */
        readonly sourceFile: FileName,
        /**
         * @summary `destinationFile`.
         * @public
         * @readonly
         */
        readonly destinationFile: FileName
    ) {}

    /**
     * @summary Restructures an object into a ObtainFile_Request
     * @description
     * 
     * This takes an `object` and converts it to a `ObtainFile_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObtainFile_Request`.
     * @returns {ObtainFile_Request}
     */
    public static _from_object (_o: { [_K in keyof (ObtainFile_Request)]: (ObtainFile_Request)[_K] }): ObtainFile_Request {
        return new ObtainFile_Request(_o.sourceFileServer, _o.sourceFile, _o.destinationFile);
    }


}

/**
 * @summary The Leading Root Component Types of ObtainFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObtainFile_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceFileServer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sourceFile", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destinationFile", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ObtainFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObtainFile_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObtainFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ObtainFile_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObtainFile_Request: $.ASN1Decoder<ObtainFile_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObtainFile_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObtainFile_Request (el: _Element): ObtainFile_Request {
    if (!_cached_decoder_for_ObtainFile_Request) { _cached_decoder_for_ObtainFile_Request = function (el: _Element): ObtainFile_Request {
    let sourceFileServer: OPTIONAL<ApplicationReference>;
    let sourceFile!: FileName;
    let destinationFile!: FileName;
    const callbacks: $.DecodingMap = {
        "sourceFileServer": (_el: _Element): void => { sourceFileServer = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); },
        "sourceFile": (_el: _Element): void => { sourceFile = $._decode_implicit<FileName>(() => _decode_FileName)(_el); },
        "destinationFile": (_el: _Element): void => { destinationFile = $._decode_implicit<FileName>(() => _decode_FileName)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ObtainFile_Request,
        _extension_additions_list_spec_for_ObtainFile_Request,
        _root_component_type_list_2_spec_for_ObtainFile_Request,
        undefined,
    );
    return new ObtainFile_Request(
        sourceFileServer,
        sourceFile,
        destinationFile
    );
}; }
    return _cached_decoder_for_ObtainFile_Request(el);
}

let _cached_encoder_for_ObtainFile_Request: $.ASN1Encoder<ObtainFile_Request> | null = null;

/**
 * @summary Encodes a(n) ObtainFile_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObtainFile_Request, encoded as an ASN.1 Element.
 */
export
function _encode_ObtainFile_Request (value: ObtainFile_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObtainFile_Request) { _cached_encoder_for_ObtainFile_Request = function (value: ObtainFile_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sourceFileServer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ApplicationReference, $.BER)(value.sourceFileServer, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FileName, $.BER)(value.sourceFile, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FileName, $.BER)(value.destinationFile, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ObtainFile_Request(value, elGetter);
}


/* eslint-enable */
