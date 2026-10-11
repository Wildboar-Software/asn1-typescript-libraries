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
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";


/**
 * @summary StoreUnitControlToFile_Request
 * @description
 * 
 * Client request to store a Unit Control object's Domains and Program
 * Invocations to a file (local or third party). Object must exist. ISO 9506-1:2003 §13.13. ISO 9506-2:2003 §13.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreUnitControlToFile-Request ::= SEQUENCE {
 *    unitControlName            [0] IMPLICIT Identifier,
 *    fileName                   [1] IMPLICIT FileName
 * ,  thirdParty                 [2] IMPLICIT ApplicationReference OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class StoreUnitControlToFile_Request {
    constructor (
        /**
         * @summary `unitControlName`.
         * @description
         *
         * Existing Unit Control object whose content is stored. ISO 9506-1:2003
         * §13.13.1.1.1.
         *
         * @public
         * @readonly
         */
        readonly unitControlName: Identifier,
        /**
         * @summary `fileName`.
         * @description
         *
         * Destination file. ISO 9506-1:2003 §13.13.1.1.2.
         *
         * @public
         * @readonly
         */
        readonly fileName: FileName,
        /**
         * @summary `thirdParty`.
         * @description
         *
         * Application whose filestore receives the content. Requires `tpy` CBB.
         * Absent: local store method. ISO 9506-1:2003 §13.13.1.1.3.
         *
         * @public
         * @readonly
         */
        readonly thirdParty: OPTIONAL<ApplicationReference>
    ) {}

    /**
     * @summary Restructures an object into a StoreUnitControlToFile_Request
     * @description
     * 
     * This takes an `object` and converts it to a `StoreUnitControlToFile_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StoreUnitControlToFile_Request`.
     * @returns {StoreUnitControlToFile_Request}
     */
    public static _from_object (_o: { [_K in keyof (StoreUnitControlToFile_Request)]: (StoreUnitControlToFile_Request)[_K] }): StoreUnitControlToFile_Request {
        return new StoreUnitControlToFile_Request(_o.unitControlName, _o.fileName, _o.thirdParty);
    }


}

/**
 * @summary The Leading Root Component Types of StoreUnitControlToFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StoreUnitControlToFile_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("unitControlName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fileName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("thirdParty", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of StoreUnitControlToFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StoreUnitControlToFile_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StoreUnitControlToFile_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StoreUnitControlToFile_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StoreUnitControlToFile_Request: $.ASN1Decoder<StoreUnitControlToFile_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StoreUnitControlToFile_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StoreUnitControlToFile_Request (el: _Element): StoreUnitControlToFile_Request {
    if (!_cached_decoder_for_StoreUnitControlToFile_Request) { _cached_decoder_for_StoreUnitControlToFile_Request = function (el: _Element): StoreUnitControlToFile_Request {
    let unitControlName!: Identifier;
    let fileName!: FileName;
    let thirdParty: OPTIONAL<ApplicationReference>;
    const callbacks: $.DecodingMap = {
        "unitControlName": (_el: _Element): void => { unitControlName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "fileName": (_el: _Element): void => { fileName = $._decode_implicit<FileName>(() => _decode_FileName)(_el); },
        "thirdParty": (_el: _Element): void => { thirdParty = $._decode_implicit<ApplicationReference>(() => _decode_ApplicationReference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StoreUnitControlToFile_Request,
        _extension_additions_list_spec_for_StoreUnitControlToFile_Request,
        _root_component_type_list_2_spec_for_StoreUnitControlToFile_Request,
        undefined,
    );
    return new StoreUnitControlToFile_Request(
        unitControlName,
        fileName,
        thirdParty
    );
}; }
    return _cached_decoder_for_StoreUnitControlToFile_Request(el);
}

let _cached_encoder_for_StoreUnitControlToFile_Request: $.ASN1Encoder<StoreUnitControlToFile_Request> | null = null;

/**
 * @summary Encodes a(n) StoreUnitControlToFile_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StoreUnitControlToFile_Request, encoded as an ASN.1 Element.
 */
export
function _encode_StoreUnitControlToFile_Request (value: StoreUnitControlToFile_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StoreUnitControlToFile_Request) { _cached_encoder_for_StoreUnitControlToFile_Request = function (value: StoreUnitControlToFile_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.unitControlName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FileName, $.BER)(value.fileName, $.BER),
            /* IF_ABSENT  */ ((value.thirdParty === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ApplicationReference, $.BER)(value.thirdParty, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StoreUnitControlToFile_Request(value, elGetter);
}


/* eslint-enable */
