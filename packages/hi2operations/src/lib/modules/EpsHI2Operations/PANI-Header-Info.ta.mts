/* eslint-disable */
import {
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PANI_Location, _decode_PANI_Location, _encode_PANI_Location } from "../EpsHI2Operations/PANI-Location.ta.mjs";
// export { PANI_Location, _decode_PANI_Location, _encode_PANI_Location } from "../EpsHI2Operations/PANI-Location.ta.mjs";


/**
 * @summary PANI_Header_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PANI-Header-Info ::= SEQUENCE
 * {
 *  access-Type [1] OCTET STRING OPTIONAL,
 *  -- ASCII chain '3GPP-UTRAN-TDD', '3GPP-E-UTRAN-TDD',... : see TS 24.229 §7.2A.4 [76]
 *  access-Class [2] OCTET STRING OPTIONAL,
 *  -- ASCII chain '3GPP-UTRAN', '3GPP-E-UTRAN',... : see TS 24.229 §7.2A.4 [76]
 *  network-Provided [3] NULL OPTIONAL,
 *  -- present if provided by the network
 *  pANI-Location [4] PANI-Location OPTIONAL,
 *  ...
 * }
 * ```
 * 
 * @class
 */
export
class PANI_Header_Info {
    constructor (
        /**
         * @summary `access_Type`.
         * @public
         * @readonly
         */
        readonly access_Type: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `access_Class`.
         * @public
         * @readonly
         */
        readonly access_Class: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `network_Provided`.
         * @public
         * @readonly
         */
        readonly network_Provided: OPTIONAL<NULL>,
        /**
         * @summary `pANI_Location`.
         * @public
         * @readonly
         */
        readonly pANI_Location: OPTIONAL<PANI_Location>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PANI_Header_Info
     * @description
     * 
     * This takes an `object` and converts it to a `PANI_Header_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PANI_Header_Info`.
     * @returns {PANI_Header_Info}
     */
    public static _from_object (_o: { [_K in keyof (PANI_Header_Info)]: (PANI_Header_Info)[_K] }): PANI_Header_Info {
        return new PANI_Header_Info(_o.access_Type, _o.access_Class, _o.network_Provided, _o.pANI_Location, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PANI_Header_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PANI_Header_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("access-Type", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("access-Class", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("network-Provided", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pANI-Location", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PANI_Header_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PANI_Header_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PANI_Header_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PANI_Header_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PANI_Header_Info: $.ASN1Decoder<PANI_Header_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PANI_Header_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PANI_Header_Info (el: _Element): PANI_Header_Info {
    if (!_cached_decoder_for_PANI_Header_Info) { _cached_decoder_for_PANI_Header_Info = function (el: _Element): PANI_Header_Info {
    let access_Type: OPTIONAL<OCTET_STRING>;
    let access_Class: OPTIONAL<OCTET_STRING>;
    let network_Provided: OPTIONAL<NULL>;
    let pANI_Location: OPTIONAL<PANI_Location>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "access-Type": (_el: _Element): void => { access_Type = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "access-Class": (_el: _Element): void => { access_Class = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "network-Provided": (_el: _Element): void => { network_Provided = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "pANI-Location": (_el: _Element): void => { pANI_Location = $._decode_implicit<PANI_Location>(() => _decode_PANI_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PANI_Header_Info,
        _extension_additions_list_spec_for_PANI_Header_Info,
        _root_component_type_list_2_spec_for_PANI_Header_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PANI_Header_Info(
        access_Type,
        access_Class,
        network_Provided,
        pANI_Location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PANI_Header_Info(el);
}

let _cached_encoder_for_PANI_Header_Info: $.ASN1Encoder<PANI_Header_Info> | null = null;

/**
 * @summary Encodes a(n) PANI_Header_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PANI_Header_Info, encoded as an ASN.1 Element.
 */
export
function _encode_PANI_Header_Info (value: PANI_Header_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PANI_Header_Info) { _cached_encoder_for_PANI_Header_Info = function (value: PANI_Header_Info, elGetter: $.ASN1Encoder<PANI_Header_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.access_Type === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.access_Type, $.BER)),
            /* IF_ABSENT  */ ((value.access_Class === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.access_Class, $.BER)),
            /* IF_ABSENT  */ ((value.network_Provided === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.network_Provided, $.BER)),
            /* IF_ABSENT  */ ((value.pANI_Location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PANI_Location, $.BER)(value.pANI_Location, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PANI_Header_Info(value, elGetter);
}


/* eslint-enable */
