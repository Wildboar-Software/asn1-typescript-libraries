/* eslint-disable */
import {
    GraphicString,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMAddressType, _decode_SMAddressType, _encode_SMAddressType, _enum_for_SMAddressType } from "../SMSChargingDataTypes/SMAddressType.ta.mjs";
import { SMAddressDomain, _decode_SMAddressDomain, _encode_SMAddressDomain } from "../SMSChargingDataTypes/SMAddressDomain.ta.mjs";


/**
 * @summary SMAddressInfo
 * @description
 *
 * An originator or recipient address other than, or in addition to, an IMSI or
 * MSISDN. TS 32.274's examples are an E.164 number, an email address, a short
 * code, an external identifier, and a long or short code of an SCS/AS. The
 * containing field may occur more than once.
 *
 * `sMAddressType` selects the kind of address and `sMAddressData` is the
 * address. TS 32.274 does not describe `sMAddressDomain`.
 *
 * A short code here is what an end user dials to reach an application
 * service. The application identity is carried in `SMInterface`. Several
 * short numbers may map to one application (note 3 of table 6.3.1.2.1).
 *
 * 3GPP TS 32.274 V19.1.0 tables 6.1.3.3.1 and 6.3.1.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMAddressInfo ::= SEQUENCE {
 *    sMAddressType     [0] IMPLICIT SMAddressType OPTIONAL,
 *    sMAddressData     [1] IMPLICIT GraphicString OPTIONAL,
 *    sMAddressDomain   [2] IMPLICIT SMAddressDomain OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMAddressInfo {
    /**
     * @summary `sMAddressType`.
     * @description
     *
     * Kind of address in `sMAddressData`. TS 32.274 does not define the
     * enumerated values; see `SMAddressType`.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly sMAddressType: OPTIONAL<SMAddressType>;
    /**
     * @summary `sMAddressData`.
     * @description
     *
     * The address: an E.164 number, email address, short code, external
     * identifier, or long or short code of an SCS/AS, among the forms TS
     * 32.274 names.
     *
     * 3GPP TS 32.274 V19.1.0 tables 6.1.3.3.1 and 6.3.1.2.1.
     *
     * @public
     * @readonly
     */
    readonly sMAddressData: OPTIONAL<GraphicString>;
    /**
     * @summary `sMAddressDomain`.
     * @description
     *
     * TS 32.274 does not describe this component.
     *
     * @public
     * @readonly
     */
    readonly sMAddressDomain: OPTIONAL<SMAddressDomain>;

    constructor (
        sMAddressType?: OPTIONAL<SMAddressType>,
        sMAddressData?: OPTIONAL<GraphicString>,
        sMAddressDomain?: OPTIONAL<SMAddressDomain>
    ) {
        this.sMAddressType = sMAddressType;
        this.sMAddressData = sMAddressData;
        this.sMAddressDomain = sMAddressDomain;
    }

    /**
     * @summary Restructures an object into a SMAddressInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SMAddressInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMAddressInfo`.
     * @returns {SMAddressInfo}
     */
    public static _from_object (_o: { [_K in keyof (SMAddressInfo)]: (SMAddressInfo)[_K] }): SMAddressInfo {
        return new SMAddressInfo(_o.sMAddressType, _o.sMAddressData, _o.sMAddressDomain);
    }

        /**
         * @summary The enum used as the type of the component `sMAddressType`
         * @public
         * @static
         */

    public static _enum_for_sMAddressType = _enum_for_SMAddressType;
}

/**
 * @summary The Leading Root Component Types of SMAddressInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMAddressInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("sMAddressType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMAddressData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sMAddressDomain", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SMAddressInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMAddressInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMAddressInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMAddressInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMAddressInfo: $.ASN1Decoder<SMAddressInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMAddressInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMAddressInfo (el: _Element): SMAddressInfo {
    if (!_cached_decoder_for_SMAddressInfo) { _cached_decoder_for_SMAddressInfo = function (el: _Element): SMAddressInfo {
    let sMAddressType: OPTIONAL<SMAddressType>;
    let sMAddressData: OPTIONAL<GraphicString>;
    let sMAddressDomain: OPTIONAL<SMAddressDomain>;
    const callbacks: $.DecodingMap = {
        "sMAddressType": (_el: _Element): void => { sMAddressType = $._decode_implicit<SMAddressType>(() => _decode_SMAddressType)(_el); },
        "sMAddressData": (_el: _Element): void => { sMAddressData = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "sMAddressDomain": (_el: _Element): void => { sMAddressDomain = $._decode_implicit<SMAddressDomain>(() => _decode_SMAddressDomain)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMAddressInfo,
        _extension_additions_list_spec_for_SMAddressInfo,
        _root_component_type_list_2_spec_for_SMAddressInfo,
        undefined,
    );
    return new SMAddressInfo(
        sMAddressType,
        sMAddressData,
        sMAddressDomain
    );
}; }
    return _cached_decoder_for_SMAddressInfo(el);
}

let _cached_encoder_for_SMAddressInfo: $.ASN1Encoder<SMAddressInfo> | null = null;

/**
 * @summary Encodes a(n) SMAddressInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMAddressInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SMAddressInfo (value: SMAddressInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMAddressInfo) { _cached_encoder_for_SMAddressInfo = function (value: SMAddressInfo, _elGetter: $.ASN1Encoder<SMAddressInfo>): _Element {
    const _components: _Element[] = [];
    if (value.sMAddressType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_SMAddressType, $.BER)(value.sMAddressType, $.BER));
    }
    if (value.sMAddressData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER)(value.sMAddressData, $.BER));
    }
    if (value.sMAddressDomain !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMAddressDomain, $.BER)(value.sMAddressDomain, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMAddressInfo(value, elGetter);
}


/* eslint-enable */
