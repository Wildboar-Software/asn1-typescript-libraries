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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary LoadUnitControlFromFile_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadUnitControlFromFile-Request ::= SEQUENCE {
 *    unitControlName            [0] IMPLICIT Identifier,
 *    fileName                   [1] IMPLICIT FileName
 * ,  thirdParty                 [2] IMPLICIT ApplicationReference OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class LoadUnitControlFromFile_Request {
    constructor (
        /**
         * @summary `unitControlName`.
         * @public
         * @readonly
         */
        readonly unitControlName: Identifier,
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
     * @summary Restructures an object into a LoadUnitControlFromFile_Request
     * @description
     * 
     * This takes an `object` and converts it to a `LoadUnitControlFromFile_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LoadUnitControlFromFile_Request`.
     * @returns {LoadUnitControlFromFile_Request}
     */
    public static _from_object (_o: { [_K in keyof (LoadUnitControlFromFile_Request)]: (LoadUnitControlFromFile_Request)[_K] }): LoadUnitControlFromFile_Request {
        return new LoadUnitControlFromFile_Request(_o.unitControlName, _o.fileName, _o.thirdParty);
    }


}

/**
 * @summary The Leading Root Component Types of LoadUnitControlFromFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LoadUnitControlFromFile_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("unitControlName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("thirdParty", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LoadUnitControlFromFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LoadUnitControlFromFile_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LoadUnitControlFromFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LoadUnitControlFromFile_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LoadUnitControlFromFile_Request: $.ASN1Decoder<LoadUnitControlFromFile_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadUnitControlFromFile_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadUnitControlFromFile_Request (el: _Element): LoadUnitControlFromFile_Request {
    if (!_cached_decoder_for_LoadUnitControlFromFile_Request) { _cached_decoder_for_LoadUnitControlFromFile_Request = function (el: _Element): LoadUnitControlFromFile_Request {
    let unitControlName!: Identifier;
    let fileName!: FileName;
    let thirdParty: OPTIONAL<ApplicationReference>;
    const callbacks: $.DecodingMap = {
        "unitControlName": (_el: _Element): void => { unitControlName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "fileName": (_el: _Element): void => { fileName = $._decode_implicit<FileName>(() => _decode_FileName)(_el); },
        "thirdParty": (_el: _Element): void => { thirdParty = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LoadUnitControlFromFile_Request,
        _extension_additions_list_spec_for_LoadUnitControlFromFile_Request,
        _root_component_type_list_2_spec_for_LoadUnitControlFromFile_Request,
        undefined,
    );
    return new LoadUnitControlFromFile_Request(
        unitControlName,
        fileName,
        thirdParty
    );
}; }
    return _cached_decoder_for_LoadUnitControlFromFile_Request(el);
}

let _cached_encoder_for_LoadUnitControlFromFile_Request: $.ASN1Encoder<LoadUnitControlFromFile_Request> | null = null;

/**
 * @summary Encodes a(n) LoadUnitControlFromFile_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadUnitControlFromFile_Request, encoded as an ASN.1 Element.
 */
export
function _encode_LoadUnitControlFromFile_Request (value: LoadUnitControlFromFile_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadUnitControlFromFile_Request) { _cached_encoder_for_LoadUnitControlFromFile_Request = function (value: LoadUnitControlFromFile_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.unitControlName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FileName, $.BER)(value.fileName, $.BER),
            /* IF_ABSENT  */ ((value.thirdParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ApplicationReference, $.BER)(value.thirdParty, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LoadUnitControlFromFile_Request(value, elGetter);
}


/* eslint-enable */
