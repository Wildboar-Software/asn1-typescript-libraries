/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMELocationInformation, _decode_MMELocationInformation, _encode_MMELocationInformation } from "../MONTEChargingDataTypes/MMELocationInformation.ta.mjs";
import { SGSNLocationInformation, _decode_SGSNLocationInformation, _encode_SGSNLocationInformation } from "../MONTEChargingDataTypes/SGSNLocationInformation.ta.mjs";


/**
 * @summary EPSLocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSLocationInfo ::= SEQUENCE {
 *    mMELocationInformation    [0] IMPLICIT MMELocationInformation OPTIONAL,
 *    sGSNLocationInformation   [1] IMPLICIT SGSNLocationInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class EPSLocationInfo {
    /**
     * @summary `mMELocationInformation`.
     * @public
     * @readonly
     */
    readonly mMELocationInformation: OPTIONAL<MMELocationInformation>;
    /**
     * @summary `sGSNLocationInformation`.
     * @public
     * @readonly
     */
    readonly sGSNLocationInformation: OPTIONAL<SGSNLocationInformation>;

    constructor (
        mMELocationInformation: OPTIONAL<MMELocationInformation>,
        sGSNLocationInformation: OPTIONAL<SGSNLocationInformation>
    ) {
        this.mMELocationInformation = mMELocationInformation;
        this.sGSNLocationInformation = sGSNLocationInformation;
    }

    /**
     * @summary Restructures an object into a EPSLocationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EPSLocationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSLocationInfo`.
     * @returns {EPSLocationInfo}
     */
    public static _from_object (_o: { [_K in keyof (EPSLocationInfo)]: (EPSLocationInfo)[_K] }): EPSLocationInfo {
        return new EPSLocationInfo(_o.mMELocationInformation, _o.sGSNLocationInformation);
    }


}

/**
 * @summary The Leading Root Component Types of EPSLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSLocationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("mMELocationInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sGSNLocationInformation", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EPSLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSLocationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSLocationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSLocationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSLocationInfo: $.ASN1Decoder<EPSLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSLocationInfo (el: _Element): EPSLocationInfo {
    if (!_cached_decoder_for_EPSLocationInfo) { _cached_decoder_for_EPSLocationInfo = function (el: _Element): EPSLocationInfo {
    let mMELocationInformation: OPTIONAL<MMELocationInformation>;
    let sGSNLocationInformation: OPTIONAL<SGSNLocationInformation>;
    const callbacks: $.DecodingMap = {
        "mMELocationInformation": (_el: _Element): void => { mMELocationInformation = $._decode_implicit<MMELocationInformation>(() => _decode_MMELocationInformation)(_el); },
        "sGSNLocationInformation": (_el: _Element): void => { sGSNLocationInformation = $._decode_implicit<SGSNLocationInformation>(() => _decode_SGSNLocationInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSLocationInfo,
        _extension_additions_list_spec_for_EPSLocationInfo,
        _root_component_type_list_2_spec_for_EPSLocationInfo,
        undefined,
    );
    return new EPSLocationInfo(
        mMELocationInformation,
        sGSNLocationInformation
    );
}; }
    return _cached_decoder_for_EPSLocationInfo(el);
}

let _cached_encoder_for_EPSLocationInfo: $.ASN1Encoder<EPSLocationInfo> | null = null;

/**
 * @summary Encodes a(n) EPSLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EPSLocationInfo (value: EPSLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSLocationInfo) { _cached_encoder_for_EPSLocationInfo = function (value: EPSLocationInfo, _elGetter: $.ASN1Encoder<EPSLocationInfo>): _Element {
    const _components: _Element[] = [];
    if (value.mMELocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_MMELocationInformation, $.BER)(value.mMELocationInformation, $.BER));
    }
    if (value.sGSNLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SGSNLocationInformation, $.BER)(value.sGSNLocationInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EPSLocationInfo(value, elGetter);
}


/* eslint-enable */
