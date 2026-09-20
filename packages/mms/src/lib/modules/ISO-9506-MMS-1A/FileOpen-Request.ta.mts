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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary FileOpen_Request
 * @description
 *
 * Confirmed request: identify a file to read and
 * establish the open state of a File Read State
 * Machine (FRSM). Informative Annex D. Virtual
 * filestore is sequential unstructured binary;
 * no random access or modification.
 *
 * [ISO 9506-1:2003 Annex D, D.3]
 * [ISO 9506-2:2003 Annex D, D.2]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileOpen-Request ::= SEQUENCE {
 *     fileName            [0] IMPLICIT FileName,
 *     initialPosition     [1] IMPLICIT Unsigned32
 * }
 * ```
 * 
 * @class
 */
export
class FileOpen_Request {
    constructor (
        /**
         * @summary `fileName`.
         * @description
         *
         * Unambiguously identifies a single file to
         * open for reading in the server's virtual
         * filestore. Wildcard resolution shall yield
         * a single name, else an error.
         *
         * [ISO 9506-1:2003 Annex D, D.3.1.1.1]
         *
         * @public
         * @readonly
         */
        readonly fileName: FileName,
        /**
         * @summary `initialPosition`.
         * @description
         *
         * Non-negative octet offset of the first
         * FileRead. Zero begins at the start of the
         * file; larger values skip that many octets.
         * Must lie within the file.
         *
         * [ISO 9506-1:2003 Annex D, D.3.1.1.2]
         *
         * @public
         * @readonly
         */
        readonly initialPosition: Unsigned32
    ) {}

    /**
     * @summary Restructures an object into a FileOpen_Request
     * @description
     * 
     * This takes an `object` and converts it to a `FileOpen_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileOpen_Request`.
     * @returns {FileOpen_Request}
     */
    public static _from_object (_o: { [_K in keyof (FileOpen_Request)]: (FileOpen_Request)[_K] }): FileOpen_Request {
        return new FileOpen_Request(_o.fileName, _o.initialPosition);
    }


}

/**
 * @summary The Leading Root Component Types of FileOpen_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileOpen_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("initialPosition", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of FileOpen_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileOpen_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileOpen_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileOpen_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileOpen_Request: $.ASN1Decoder<FileOpen_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileOpen_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileOpen_Request (el: _Element): FileOpen_Request {
    if (!_cached_decoder_for_FileOpen_Request) { _cached_decoder_for_FileOpen_Request = function (el: _Element): FileOpen_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FileOpen-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fileName";
    sequence[1].name = "initialPosition";
    let fileName!: FileName;
    let initialPosition!: Unsigned32;
    fileName = $._decode_implicit<FileName>(() => _decode_FileName)(sequence[0]);
    initialPosition = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[1]);
    return new FileOpen_Request(
        fileName,
        initialPosition,

    );
}; }
    return _cached_decoder_for_FileOpen_Request(el);
}

let _cached_encoder_for_FileOpen_Request: $.ASN1Encoder<FileOpen_Request> | null = null;

/**
 * @summary Encodes a(n) FileOpen_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileOpen_Request, encoded as an ASN.1 Element.
 */
export
function _encode_FileOpen_Request (value: FileOpen_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileOpen_Request) { _cached_encoder_for_FileOpen_Request = function (value: FileOpen_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_FileName, $.BER)(value.fileName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.initialPosition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileOpen_Request(value, elGetter);
}


/* eslint-enable */
