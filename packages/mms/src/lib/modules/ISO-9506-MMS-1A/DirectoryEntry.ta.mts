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
import { FileAttributes, _decode_FileAttributes, _encode_FileAttributes } from "../ISO-9506-MMS-1A/FileAttributes.ta.mjs";
// export { FileAttributes, _decode_FileAttributes, _encode_FileAttributes } from "../ISO-9506-MMS-1A/FileAttributes.ta.mjs";


/**
 * @summary DirectoryEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectoryEntry ::= SEQUENCE {
 *     fileName               [0] IMPLICIT FileName,
 *     fileAttributes         [1] IMPLICIT FileAttributes
 * }
 * ```
 * 
 * @class
 */
export
class DirectoryEntry {
    constructor (
        /**
         * @summary `fileName`.
         * @public
         * @readonly
         */
        readonly fileName: FileName,
        /**
         * @summary `fileAttributes`.
         * @public
         * @readonly
         */
        readonly fileAttributes: FileAttributes
    ) {}

    /**
     * @summary Restructures an object into a DirectoryEntry
     * @description
     * 
     * This takes an `object` and converts it to a `DirectoryEntry`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryEntry`.
     * @returns {DirectoryEntry}
     */
    public static _from_object (_o: { [_K in keyof (DirectoryEntry)]: (DirectoryEntry)[_K] }): DirectoryEntry {
        return new DirectoryEntry(_o.fileName, _o.fileAttributes);
    }


}

/**
 * @summary The Leading Root Component Types of DirectoryEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DirectoryEntry: $.ComponentSpec[] = [
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fileAttributes", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DirectoryEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DirectoryEntry: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DirectoryEntry
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DirectoryEntry: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DirectoryEntry: $.ASN1Decoder<DirectoryEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectoryEntry (el: _Element): DirectoryEntry {
    if (!_cached_decoder_for_DirectoryEntry) { _cached_decoder_for_DirectoryEntry = function (el: _Element): DirectoryEntry {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DirectoryEntry contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fileName";
    sequence[1].name = "fileAttributes";
    let fileName!: FileName;
    let fileAttributes!: FileAttributes;
    fileName = $._decode_implicit<FileName>(() => _decode_FileName)(sequence[0]);
    fileAttributes = $._decode_implicit<FileAttributes>(() => _decode_FileAttributes)(sequence[1]);
    return new DirectoryEntry(
        fileName,
        fileAttributes,

    );
}; }
    return _cached_decoder_for_DirectoryEntry(el);
}

let _cached_encoder_for_DirectoryEntry: $.ASN1Encoder<DirectoryEntry> | null = null;

/**
 * @summary Encodes a(n) DirectoryEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryEntry, encoded as an ASN.1 Element.
 */
export
function _encode_DirectoryEntry (value: DirectoryEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectoryEntry) { _cached_encoder_for_DirectoryEntry = function (value: DirectoryEntry): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_FileName, $.BER)(value.fileName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FileAttributes, $.BER)(value.fileAttributes, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DirectoryEntry(value, elGetter);
}


/* eslint-enable */
