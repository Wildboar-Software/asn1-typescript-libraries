/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type UTRANPositioningData, _decode_UTRANPositioningData, _encode_UTRANPositioningData } from "../TS33128Payloads/UTRANPositioningData.ta.mjs";
// export { UTRANPositioningData, _decode_UTRANPositioningData, _encode_UTRANPositioningData } from "../TS33128Payloads/UTRANPositioningData.ta.mjs";
import { type UTRANGANSSPositioningData, _decode_UTRANGANSSPositioningData, _encode_UTRANGANSSPositioningData } from "../TS33128Payloads/UTRANGANSSPositioningData.ta.mjs";
// export { UTRANGANSSPositioningData, _decode_UTRANGANSSPositioningData, _encode_UTRANGANSSPositioningData } from "../TS33128Payloads/UTRANGANSSPositioningData.ta.mjs";
import { type UTRANAdditionalPositioningData, _decode_UTRANAdditionalPositioningData, _encode_UTRANAdditionalPositioningData } from "../TS33128Payloads/UTRANAdditionalPositioningData.ta.mjs";
// export { UTRANAdditionalPositioningData, _decode_UTRANAdditionalPositioningData, _encode_UTRANAdditionalPositioningData } from "../TS33128Payloads/UTRANAdditionalPositioningData.ta.mjs";


/**
 * @summary UTRANPositioningInfo
 * @description
 * 
 * The UTRANPositioningInfo type is used to indicate the usage of each
 * positioning method that was attempted to determine the location estimate,
 * either successfully or unsuccessfully. This Information Element is applicable
 * only when the UE is attached to UTRAN access and when the message is sent by
 * the SGSN or the SGSN part of the combined MME/SGSN. Derived from the data
 * found in TS 29.172 [53] clause 7.4.32.
 *
 * NOTE: The uTRANAdditionalPositioningData parameter was incorrectly introduced
 * in version 18.4.0 of the present document (ASN.1 OID r18(18) version3(3)) as
 * a mandatory parameter and was not corrected before the creation of version
 * 19.0.0 of the present document. It should have been OPTIONAL and was
 * corrected in version 18.16.0 of the present document (ASN.1 OID r18(18)
 * version(15)) and version 19.7.0 of the present document (ASN.1 OID r19(19)
 * version7(7)).
 *
 * 3GPP TS 33.128, clause 7.3.3.2.76.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANPositioningInfo ::= SEQUENCE
 * {
 *     uTRANPositioningData           [1] UTRANPositioningData OPTIONAL,
 *     uTRANGANSSPositioningData      [2] UTRANGANSSPositioningData OPTIONAL,
 *     uTRANAdditionalPositioningData [3] UTRANAdditionalPositioningData OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UTRANPositioningInfo {
    /**
     * @summary `uTRANPositioningData`.
     * @description
     *
     * Shall contain the encoded content of the "UTRAN-Positioning-Data" in the
     * "UTRAN-Positioning-Info" parameter. Defined in TS 29.172 [52] clause
     * 7.4.33.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.76.
     *
     * @public
     * @readonly
     */
    readonly uTRANPositioningData: OPTIONAL<UTRANPositioningData>;
    /**
     * @summary `uTRANGANSSPositioningData`.
     * @description
     *
     * Shall contain the encoded content of the "UTRAN-GANSS-Positioning-Data"
     * only, included in the "UTRAN-Positioning-Info" parameter. Defined in TS
     * 29.172 [53] clause 7.4.34.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.76.
     *
     * @public
     * @readonly
     */
    readonly uTRANGANSSPositioningData: OPTIONAL<UTRANGANSSPositioningData>;
    /**
     * @summary `uTRANAdditionalPositioningData`.
     * @description
     *
     * Contains the "UTRAN-Additional-Positioning-Data" included in the
     * "UTRAN-Positioning-Info" parameter. Defined in TS 29.172 [53] clause
     * 7.4.63.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.76.
     *
     * @public
     * @readonly
     */
    readonly uTRANAdditionalPositioningData: OPTIONAL<UTRANAdditionalPositioningData>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        uTRANPositioningData?: OPTIONAL<UTRANPositioningData>,
        uTRANGANSSPositioningData?: OPTIONAL<UTRANGANSSPositioningData>,
        uTRANAdditionalPositioningData?: OPTIONAL<UTRANAdditionalPositioningData>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.uTRANPositioningData = uTRANPositioningData;
        this.uTRANGANSSPositioningData = uTRANGANSSPositioningData;
        this.uTRANAdditionalPositioningData = uTRANAdditionalPositioningData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a UTRANPositioningInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UTRANPositioningInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UTRANPositioningInfo`.
     * @returns {UTRANPositioningInfo}
     */
    public static _from_object (_o: { [_K in keyof (UTRANPositioningInfo)]: (UTRANPositioningInfo)[_K] }): UTRANPositioningInfo {
        return new UTRANPositioningInfo(_o.uTRANPositioningData, _o.uTRANGANSSPositioningData, _o.uTRANAdditionalPositioningData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UTRANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UTRANPositioningInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("uTRANPositioningData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uTRANGANSSPositioningData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uTRANAdditionalPositioningData", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UTRANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UTRANPositioningInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UTRANPositioningInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UTRANPositioningInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UTRANPositioningInfo: $.ASN1Decoder<UTRANPositioningInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UTRANPositioningInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UTRANPositioningInfo (el: _Element): UTRANPositioningInfo {
    if (!_cached_decoder_for_UTRANPositioningInfo) { _cached_decoder_for_UTRANPositioningInfo = function (el: _Element): UTRANPositioningInfo {
    let uTRANPositioningData: OPTIONAL<UTRANPositioningData>;
    let uTRANGANSSPositioningData: OPTIONAL<UTRANGANSSPositioningData>;
    let uTRANAdditionalPositioningData: OPTIONAL<UTRANAdditionalPositioningData>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uTRANPositioningData": (_el: _Element): void => { uTRANPositioningData = $._decode_implicit<UTRANPositioningData>(() => _decode_UTRANPositioningData)(_el); },
        "uTRANGANSSPositioningData": (_el: _Element): void => { uTRANGANSSPositioningData = $._decode_implicit<UTRANGANSSPositioningData>(() => _decode_UTRANGANSSPositioningData)(_el); },
        "uTRANAdditionalPositioningData": (_el: _Element): void => { uTRANAdditionalPositioningData = $._decode_implicit<UTRANAdditionalPositioningData>(() => _decode_UTRANAdditionalPositioningData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UTRANPositioningInfo,
        _extension_additions_list_spec_for_UTRANPositioningInfo,
        _root_component_type_list_2_spec_for_UTRANPositioningInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UTRANPositioningInfo(
        uTRANPositioningData,
        uTRANGANSSPositioningData,
        uTRANAdditionalPositioningData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UTRANPositioningInfo(el);
}

let _cached_encoder_for_UTRANPositioningInfo: $.ASN1Encoder<UTRANPositioningInfo> | null = null;

/**
 * @summary Encodes a(n) UTRANPositioningInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRANPositioningInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UTRANPositioningInfo (value: UTRANPositioningInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UTRANPositioningInfo) { _cached_encoder_for_UTRANPositioningInfo = function (value: UTRANPositioningInfo, elGetter: $.ASN1Encoder<UTRANPositioningInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.uTRANPositioningData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_UTRANPositioningData, $.BER)(value.uTRANPositioningData, $.BER);
    }
    if (value.uTRANGANSSPositioningData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_UTRANGANSSPositioningData, $.BER)(value.uTRANGANSSPositioningData, $.BER);
    }
    if (value.uTRANAdditionalPositioningData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_UTRANAdditionalPositioningData, $.BER)(value.uTRANAdditionalPositioningData, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UTRANPositioningInfo(value, elGetter);
}


/* eslint-enable */
