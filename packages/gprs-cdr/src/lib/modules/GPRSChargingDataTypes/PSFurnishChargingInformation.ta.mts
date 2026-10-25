/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PSFurnishChargingInformation
 * @description
 *
 * This field includes following information elements for IP-CAN bearer
 * (PGW-CDR), for TDF session (TDF-CDR), or for the IP-CAN session (IPE-CDR):
 * This field contains charging information sent by the OCS in the Diameter
 * Credit-Control Credit-Control-Answer messages as defined in TS 32.251
 * [11]. The data can be sent either in one Diameter Credit-Control
 * Credit-Control-Answer message or several Diameter Credit-Control
 * Credit-Control-Answer messages with append indicator. This data is
 * transferred transparently in the PS Furnish Charging Information field of
 * the relevant call records.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.45.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PSFurnishChargingInformation ::= SEQUENCE {
 *    pSFreeFormatData       [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ),
 *    pSFFDAppendIndicator   [2] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PSFurnishChargingInformation {
    /**
     * @summary `pSFreeFormatData`.
     * @description
     *
     * PS Free Format Data
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.45.
     *
     * @public
     * @readonly
     */
    readonly pSFreeFormatData: OCTET_STRING;
    /**
     * @summary `pSFFDAppendIndicator`.
     * @public
     * @readonly
     */
    readonly pSFFDAppendIndicator: OPTIONAL<BOOLEAN>;

    constructor (
        pSFreeFormatData: OCTET_STRING,
        pSFFDAppendIndicator?: OPTIONAL<BOOLEAN>
    ) {
        this.pSFreeFormatData = pSFreeFormatData;
        this.pSFFDAppendIndicator = pSFFDAppendIndicator;
    
        if ((this.pSFreeFormatData.length < 1 || this.pSFreeFormatData.length > 160)) {
            throw new ASN1SizeError("PSFurnishChargingInformation.pSFreeFormatData violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PSFurnishChargingInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PSFurnishChargingInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PSFurnishChargingInformation`.
     * @returns {PSFurnishChargingInformation}
     */
    public static _from_object (_o: { [_K in keyof (PSFurnishChargingInformation)]: (PSFurnishChargingInformation)[_K] }): PSFurnishChargingInformation {
        return new PSFurnishChargingInformation(_o.pSFreeFormatData, _o.pSFFDAppendIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of PSFurnishChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PSFurnishChargingInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pSFreeFormatData", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pSFFDAppendIndicator", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PSFurnishChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PSFurnishChargingInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PSFurnishChargingInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PSFurnishChargingInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PSFurnishChargingInformation: $.ASN1Decoder<PSFurnishChargingInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSFurnishChargingInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PSFurnishChargingInformation (el: _Element): PSFurnishChargingInformation {
    if (!_cached_decoder_for_PSFurnishChargingInformation) { _cached_decoder_for_PSFurnishChargingInformation = function (el: _Element): PSFurnishChargingInformation {
    let pSFreeFormatData!: OCTET_STRING;
    let pSFFDAppendIndicator: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "pSFreeFormatData": (_el: _Element): void => { pSFreeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pSFFDAppendIndicator": (_el: _Element): void => { pSFFDAppendIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PSFurnishChargingInformation,
        _extension_additions_list_spec_for_PSFurnishChargingInformation,
        _root_component_type_list_2_spec_for_PSFurnishChargingInformation,
        undefined,
    );
    return new PSFurnishChargingInformation(
        pSFreeFormatData,
        pSFFDAppendIndicator
    );
}; }
    return _cached_decoder_for_PSFurnishChargingInformation(el);
}

let _cached_encoder_for_PSFurnishChargingInformation: $.ASN1Encoder<PSFurnishChargingInformation> | null = null;

/**
 * @summary Encodes a(n) PSFurnishChargingInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSFurnishChargingInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PSFurnishChargingInformation (value: PSFurnishChargingInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PSFurnishChargingInformation) { _cached_encoder_for_PSFurnishChargingInformation = function (value: PSFurnishChargingInformation, _elGetter: $.ASN1Encoder<PSFurnishChargingInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.pSFreeFormatData, $.BER));
    if (value.pSFFDAppendIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.pSFFDAppendIndicator, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PSFurnishChargingInformation(value, elGetter);
}


/* eslint-enable */
