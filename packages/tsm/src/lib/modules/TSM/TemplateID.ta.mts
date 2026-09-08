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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";

import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";

import { TemplateInfo, _decode_TemplateInfo, _encode_TemplateInfo } from "../TSM/TemplateInfo.ta.mjs";



/**
 * @summary TemplateID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TemplateID ::= SEQUENCE {
 * certificateIssuer        Name,                    -- see Rec. ITU-T X.509
 * serialNumber        CertificateSerialNumber, -- see Rec. ITU-T X.509
 * templateInfo        TemplateInfo
 * }
 * ```
 * 
 * @class
 */
export
class TemplateID {
    constructor (
        /**
         * @summary `certificateIssuer`.
         * @public
         * @readonly
         */
        readonly certificateIssuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `templateInfo`.
         * @public
         * @readonly
         */
        readonly templateInfo: TemplateInfo
    ) {}

    /**
     * @summary Restructures an object into a TemplateID
     * @description
     * 
     * This takes an `object` and converts it to a `TemplateID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TemplateID`.
     * @returns {TemplateID}
     */
    public static _from_object (_o: { [_K in keyof (TemplateID)]: (TemplateID)[_K] }): TemplateID {
        return new TemplateID(_o.certificateIssuer, _o.serialNumber, _o.templateInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TemplateID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TemplateID: $.ComponentSpec[] = [
    new $.ComponentSpec("certificateIssuer", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serialNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("templateInfo", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TemplateID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TemplateID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TemplateID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TemplateID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TemplateID: $.ASN1Decoder<TemplateID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TemplateID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TemplateID (el: _Element): TemplateID {
    if (!_cached_decoder_for_TemplateID) { _cached_decoder_for_TemplateID = function (el: _Element): TemplateID {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TemplateID contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "certificateIssuer";
    sequence[1].name = "serialNumber";
    sequence[2].name = "templateInfo";
    let certificateIssuer!: Name;
    let serialNumber!: CertificateSerialNumber;
    let templateInfo!: TemplateInfo;
    certificateIssuer = _decode_Name(sequence[0]);
    serialNumber = _decode_CertificateSerialNumber(sequence[1]);
    templateInfo = _decode_TemplateInfo(sequence[2]);
    return new TemplateID(
        certificateIssuer,
        serialNumber,
        templateInfo,

    );
}; }
    return _cached_decoder_for_TemplateID(el);
}

let _cached_encoder_for_TemplateID: $.ASN1Encoder<TemplateID> | null = null;

/**
 * @summary Encodes a(n) TemplateID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TemplateID, encoded as an ASN.1 Element.
 */
export
function _encode_TemplateID (value: TemplateID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TemplateID) { _cached_encoder_for_TemplateID = function (value: TemplateID): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.certificateIssuer, $.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, $.BER),
            /* REQUIRED   */ _encode_TemplateInfo(value.templateInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TemplateID(value, elGetter);
}


/* eslint-enable */
