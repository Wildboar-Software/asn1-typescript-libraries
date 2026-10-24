/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FileID
 * @description
 *
 * Elementary-file identifier from informative Appendix K. `fid` is the
 * two-octet file identifier. `sfid`, when present, is the
 * one-octet short file identifier.
 *
 * Appendix K uses it as `efCVCA` on a `TerminalAuthenticationInfo` that
 * section 9.2.8 does not include. If `fid` is given without `sfid`, EF.CVCA
 * is selected explicitly with that file identifier. The default file
 * identifier is `0x011C` and the default short identifier is `0x1C`.
 *
 * Doc 9303-11, Appendix K.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileID ::= SEQUENCE {
 *     fid     OCTET STRING (SIZE(2)),
 *     sfid    OCTET STRING (SIZE(1)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FileID {
    /**
     * Two-octet elementary-file identifier.
     * @summary `fid`.
     * @public
     * @readonly
     */
    public readonly fid: OCTET_STRING;
    /**
     * One-octet short file identifier. Absent means the file is selected
     * explicitly by `fid`.
     * @summary `sfid`.
     * @public
     * @readonly
     */
    public readonly sfid?: OPTIONAL<OCTET_STRING>;

    constructor (
        fid: OCTET_STRING,
        sfid?: OPTIONAL<OCTET_STRING>
    ) {
        this.fid = fid;
        this.sfid = sfid;
        if (fid.length !== 2) {
            throw new ASN1SizeError("FileID.fid violates SIZE constraint");
        }
        if (sfid !== undefined && sfid.length !== 1) {
            throw new ASN1SizeError("FileID.sfid violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a FileID
     * @description
     * 
     * This takes an `object` and converts it to a `FileID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FileID`.
     * @returns {FileID}
     */
    public static _from_object (_o: { [_K in keyof (FileID)]: (FileID)[_K] }): FileID {
        return new FileID(_o.fid, _o.sfid);
    }


}

/**
 * @summary The Leading Root Component Types of FileID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FileID: $.ComponentSpec[] = [
    new $.ComponentSpec("fid", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("sfid", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of FileID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FileID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FileID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FileID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FileID: $.ASN1Decoder<FileID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileID (el: _Element): FileID {
    if (!_cached_decoder_for_FileID) { _cached_decoder_for_FileID = function (el: _Element): FileID {
    let fid!: OCTET_STRING;
    let sfid: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "fid": (_el: _Element): void => { fid = $._decodeOctetString(_el); },
        "sfid": (_el: _Element): void => { sfid = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FileID,
        _extension_additions_list_spec_for_FileID,
        _root_component_type_list_2_spec_for_FileID,
        undefined,
    );
    return new FileID(
        fid,
        sfid
    );
}; }
    return _cached_decoder_for_FileID(el);
}

let _cached_encoder_for_FileID: $.ASN1Encoder<FileID> | null = null;

/**
 * @summary Encodes a(n) FileID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileID, encoded as an ASN.1 Element.
 */
export
function _encode_FileID (value: FileID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileID) { _cached_encoder_for_FileID = function (value: FileID, elGetter: $.ASN1Encoder<FileID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.fid, $.BER),
            /* IF_ABSENT  */ ((value.sfid === undefined) ? undefined : $._encodeOctetString(value.sfid, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FileID(value, elGetter);
}


/* eslint-enable */
