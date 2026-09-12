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
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";


/**
 * @summary FileRename_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileRename-Request ::= SEQUENCE {
 *     currentFileName     [0] IMPLICIT FileName,
 *     newFileName         [1] IMPLICIT FileName
 * }
 * ```
 * 
 * @class
 */
export
class FileRename_Request {
    constructor (
        /**
         * @summary `currentFileName`.
         * @public
         * @readonly
         */
        readonly currentFileName: FileName,
        /**
         * @summary `newFileName`.
         * @public
         * @readonly
         */
        readonly newFileName: FileName
    ) {}

    /**
     * @summary Restructures an object into a FileRename_Request
     * @description
     * 
     * This takes an `object` and converts it to a `FileRename_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileRename_Request`.
     * @returns {FileRename_Request}
     */
    public static _from_object (_o: { [_K in keyof (FileRename_Request)]: (FileRename_Request)[_K] }): FileRename_Request {
        return new FileRename_Request(_o.currentFileName, _o.newFileName);
    }


}

/**
 * @summary The Leading Root Component Types of FileRename_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileRename_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("currentFileName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("newFileName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FileRename_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileRename_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileRename_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileRename_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileRename_Request: $.ASN1Decoder<FileRename_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileRename_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileRename_Request (el: _Element): FileRename_Request {
    if (!_cached_decoder_for_FileRename_Request) { _cached_decoder_for_FileRename_Request = function (el: _Element): FileRename_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FileRename-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currentFileName";
    sequence[1].name = "newFileName";
    let currentFileName!: FileName;
    let newFileName!: FileName;
    currentFileName = $._decode_implicit<FileName>(() => _decode_FileName)(sequence[0]);
    newFileName = $._decode_implicit<FileName>(() => _decode_FileName)(sequence[1]);
    return new FileRename_Request(
        currentFileName,
        newFileName,

    );
}; }
    return _cached_decoder_for_FileRename_Request(el);
}

let _cached_encoder_for_FileRename_Request: $.ASN1Encoder<FileRename_Request> | null = null;

/**
 * @summary Encodes a(n) FileRename_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileRename_Request, encoded as an ASN.1 Element.
 */
export
function _encode_FileRename_Request (value: FileRename_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileRename_Request) { _cached_encoder_for_FileRename_Request = function (value: FileRename_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_FileName, $.BER)(value.currentFileName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FileName, $.BER)(value.newFileName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileRename_Request(value, elGetter);
}


/* eslint-enable */
