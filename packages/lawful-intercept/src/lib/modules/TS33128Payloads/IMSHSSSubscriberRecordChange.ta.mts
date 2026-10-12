/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
// export { HSSIdentities, _decode_HSSIdentities, _encode_HSSIdentities } from "../TS33128Payloads/HSSIdentities.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../TS33128Payloads/IMEI.ta.mjs";


/**
 * @summary IMSHSSSubscriberRecordChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSHSSSubscriberRecordChange ::= SEQUENCE
 * {
 *     hSSIdentities            [1] SEQUENCE OF HSSIdentities,
 *     iMSProfileData           [2] SBIType OPTIONAL,
 *     mSISDNs                  [3] SEQUENCE (SIZE(1..MAX)) OF MSISDN OPTIONAL,
 *     iMEI                     [4] IMEI OPTIONAL,
 *     previousIMEI             [5] IMEI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSHSSSubscriberRecordChange {
    /**
     * @summary `hSSIdentities`.
     * @public
     * @readonly
     */
    readonly hSSIdentities: HSSIdentities[];
    /**
     * @summary `iMSProfileData`.
     * @public
     * @readonly
     */
    readonly iMSProfileData: OPTIONAL<SBIType>;
    /**
     * @summary `mSISDNs`.
     * @public
     * @readonly
     */
    readonly mSISDNs: OPTIONAL<MSISDN[]>;
    /**
     * @summary `iMEI`.
     * @public
     * @readonly
     */
    readonly iMEI: OPTIONAL<IMEI>;
    /**
     * @summary `previousIMEI`.
     * @public
     * @readonly
     */
    readonly previousIMEI: OPTIONAL<IMEI>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hSSIdentities: HSSIdentities[],
        iMSProfileData: OPTIONAL<SBIType>,
        mSISDNs: OPTIONAL<MSISDN[]>,
        iMEI: OPTIONAL<IMEI>,
        previousIMEI: OPTIONAL<IMEI>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hSSIdentities = hSSIdentities;
        this.iMSProfileData = iMSProfileData;
        this.mSISDNs = mSISDNs;
        this.iMEI = iMEI;
        this.previousIMEI = previousIMEI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMSHSSSubscriberRecordChange
     * @description
     * 
     * This takes an `object` and converts it to a `IMSHSSSubscriberRecordChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSHSSSubscriberRecordChange`.
     * @returns {IMSHSSSubscriberRecordChange}
     */
    public static _from_object (_o: { [_K in keyof (IMSHSSSubscriberRecordChange)]: (IMSHSSSubscriberRecordChange)[_K] }): IMSHSSSubscriberRecordChange {
        return new IMSHSSSubscriberRecordChange(_o.hSSIdentities, _o.iMSProfileData, _o.mSISDNs, _o.iMEI, _o.previousIMEI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSHSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSHSSSubscriberRecordChange: $.ComponentSpec[] = [
    new $.ComponentSpec("hSSIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iMSProfileData", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mSISDNs", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("previousIMEI", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of IMSHSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSHSSSubscriberRecordChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSHSSSubscriberRecordChange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSHSSSubscriberRecordChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSHSSSubscriberRecordChange: $.ASN1Decoder<IMSHSSSubscriberRecordChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSHSSSubscriberRecordChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSHSSSubscriberRecordChange (el: _Element): IMSHSSSubscriberRecordChange {
    if (!_cached_decoder_for_IMSHSSSubscriberRecordChange) { _cached_decoder_for_IMSHSSSubscriberRecordChange = function (el: _Element): IMSHSSSubscriberRecordChange {
    let hSSIdentities!: HSSIdentities[];
    let iMSProfileData: OPTIONAL<SBIType>;
    let mSISDNs: OPTIONAL<MSISDN[]>;
    let iMEI: OPTIONAL<IMEI>;
    let previousIMEI: OPTIONAL<IMEI>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hSSIdentities": (_el: _Element): void => { hSSIdentities = $._decode_implicit<HSSIdentities[]>(() => $._decodeSequenceOf<HSSIdentities>(() => _decode_HSSIdentities))(_el); },
        "iMSProfileData": (_el: _Element): void => { iMSProfileData = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "mSISDNs": (_el: _Element): void => {
            mSISDNs = $._decode_implicit<MSISDN[]>(() => $._decodeSequenceOf<MSISDN>(() => _decode_MSISDN))(_el);
            if (mSISDNs.length < 1) {
                throw new ASN1SizeError("IMSHSSSubscriberRecordChange.mSISDNs violates SIZE constraint");
            }
        },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "previousIMEI": (_el: _Element): void => { previousIMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSHSSSubscriberRecordChange,
        _extension_additions_list_spec_for_IMSHSSSubscriberRecordChange,
        _root_component_type_list_2_spec_for_IMSHSSSubscriberRecordChange,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMSHSSSubscriberRecordChange(
        hSSIdentities,
        iMSProfileData,
        mSISDNs,
        iMEI,
        previousIMEI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMSHSSSubscriberRecordChange(el);
}

let _cached_encoder_for_IMSHSSSubscriberRecordChange: $.ASN1Encoder<IMSHSSSubscriberRecordChange> | null = null;

/**
 * @summary Encodes a(n) IMSHSSSubscriberRecordChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSHSSSubscriberRecordChange, encoded as an ASN.1 Element.
 */
export
function _encode_IMSHSSSubscriberRecordChange (value: IMSHSSSubscriberRecordChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSHSSSubscriberRecordChange) { _cached_encoder_for_IMSHSSSubscriberRecordChange = function (value: IMSHSSSubscriberRecordChange, elGetter: $.ASN1Encoder<IMSHSSSubscriberRecordChange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<HSSIdentities>(() => _encode_HSSIdentities, $.BER), $.BER)(value.hSSIdentities, $.BER);
    if (value.iMSProfileData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER)(value.iMSProfileData, $.BER);
    }
    if (value.mSISDNs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MSISDN>(() => _encode_MSISDN, $.BER), $.BER)(value.mSISDNs, $.BER);
    }
    if (value.iMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IMEI, $.BER)(value.iMEI, $.BER);
    }
    if (value.previousIMEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_IMEI, $.BER)(value.previousIMEI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMSHSSSubscriberRecordChange(value, elGetter);
}


/* eslint-enable */
