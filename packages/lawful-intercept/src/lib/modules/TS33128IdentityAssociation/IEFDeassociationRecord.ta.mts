/* eslint-disable */
import {
    GeneralizedTime,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128IdentityAssociation/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128IdentityAssociation/SUPI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128IdentityAssociation/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128IdentityAssociation/FiveGGUTI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128IdentityAssociation/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128IdentityAssociation/NCGI.ta.mjs";
import { AdditionalCGIs, _decode_AdditionalCGIs, _encode_AdditionalCGIs } from "../TS33128IdentityAssociation/AdditionalCGIs.ta.mjs";
// export { AdditionalCGIs, _decode_AdditionalCGIs, _encode_AdditionalCGIs } from "../TS33128IdentityAssociation/AdditionalCGIs.ta.mjs";


/**
 * @summary IEFDeassociationRecord
 * @description
 * 
 * For each de-association event, the IEF shall create an
 * IEFDeassociationRecord, as defined below.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IEFDeassociationRecord ::= SEQUENCE
 * {
 *     sUPI            [1] SUPI,
 *     fiveGGUTI       [2] FiveGGUTI,
 *     timestamp       [3] GeneralizedTime,
 *     nCGI            [4] NCGI,
 *     nCGITime        [5] GeneralizedTime,
 *     additionalCGIs  [6] AdditionalCGIs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IEFDeassociationRecord {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with detected de-association event.
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.2.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `fiveGGUTI`.
     * @description
     *
     * 5G-GUTI shall be provided. Encoded as per TS 24.501 [13] figure
     * 9.11.3.4.1, omitting the first four octets.
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.2.
     *
     * @public
     * @readonly
     */
    readonly fiveGGUTI: FiveGGUTI;
    /**
     * @summary `timestamp`.
     * @description
     *
     * Time at which the identifier de-association event occurred. Shall be
     * given qualified with time zone information (i.e. as UTC or offset from
     * UTC, not as local time)
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.2.
     *
     * @public
     * @readonly
     */
    readonly timestamp: GeneralizedTime;
    /**
     * @summary `nCGI`.
     * @description
     *
     * Current nCGI known when the identifier de-association event detected.
     * Given as a sequence of PLMNID (encoded as per TS 38.413 [23] clause
     * 9.3.3.5) and NCI (encoded as per TS 38.413 [23] clause 9.3.1.7).
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.2.
     *
     * @public
     * @readonly
     */
    readonly nCGI: NCGI;
    /**
     * @summary `nCGITime`.
     * @description
     *
     * ueLocationTimestamp of nCGI if available in AMF as per TS 29.571 [17]
     * clause 5.4.4.9. If ueLocationTimestamp is not available, shall be
     * populated with timestamp of when the current nCGI was obtained and stored
     * by the AMF.
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.2.
     *
     * @public
     * @readonly
     */
    readonly nCGITime: GeneralizedTime;
    /**
     * @summary `additionalCGIs`.
     * @description
     *
     * This parameter shall be present if the AMF has additional cell
     * information for the UE when the identifier de-association event is
     * detected. Shall contain a list of additional NCGIs that are available at
     * the AMF.
     *
     * 3GPP TS 33.128, clause 6.2.2A.2.2.
     *
     * @public
     * @readonly
     */
    readonly additionalCGIs: OPTIONAL<AdditionalCGIs>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        fiveGGUTI: FiveGGUTI,
        timestamp: GeneralizedTime,
        nCGI: NCGI,
        nCGITime: GeneralizedTime,
        additionalCGIs?: OPTIONAL<AdditionalCGIs>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.fiveGGUTI = fiveGGUTI;
        this.timestamp = timestamp;
        this.nCGI = nCGI;
        this.nCGITime = nCGITime;
        this.additionalCGIs = additionalCGIs;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IEFDeassociationRecord
     * @description
     * 
     * This takes an `object` and converts it to a `IEFDeassociationRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IEFDeassociationRecord`.
     * @returns {IEFDeassociationRecord}
     */
    public static _from_object (_o: { [_K in keyof (IEFDeassociationRecord)]: (IEFDeassociationRecord)[_K] }): IEFDeassociationRecord {
        return new IEFDeassociationRecord(_o.sUPI, _o.fiveGGUTI, _o.timestamp, _o.nCGI, _o.nCGITime, _o.additionalCGIs, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IEFDeassociationRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IEFDeassociationRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGGUTI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nCGI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("nCGITime", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("additionalCGIs", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of IEFDeassociationRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IEFDeassociationRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IEFDeassociationRecord
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IEFDeassociationRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IEFDeassociationRecord: $.ASN1Decoder<IEFDeassociationRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IEFDeassociationRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IEFDeassociationRecord (el: _Element): IEFDeassociationRecord {
    if (!_cached_decoder_for_IEFDeassociationRecord) { _cached_decoder_for_IEFDeassociationRecord = function (el: _Element): IEFDeassociationRecord {
    let sUPI!: SUPI;
    let fiveGGUTI!: FiveGGUTI;
    let timestamp!: GeneralizedTime;
    let nCGI!: NCGI;
    let nCGITime!: GeneralizedTime;
    let additionalCGIs: OPTIONAL<AdditionalCGIs>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "fiveGGUTI": (_el: _Element): void => { fiveGGUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "timestamp": (_el: _Element): void => { timestamp = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "nCGITime": (_el: _Element): void => { nCGITime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "additionalCGIs": (_el: _Element): void => { additionalCGIs = $._decode_implicit<AdditionalCGIs>(() => _decode_AdditionalCGIs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IEFDeassociationRecord,
        _extension_additions_list_spec_for_IEFDeassociationRecord,
        _root_component_type_list_2_spec_for_IEFDeassociationRecord,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IEFDeassociationRecord(
        sUPI,
        fiveGGUTI,
        timestamp,
        nCGI,
        nCGITime,
        additionalCGIs,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IEFDeassociationRecord(el);
}

let _cached_encoder_for_IEFDeassociationRecord: $.ASN1Encoder<IEFDeassociationRecord> | null = null;

/**
 * @summary Encodes a(n) IEFDeassociationRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IEFDeassociationRecord, encoded as an ASN.1 Element.
 */
export
function _encode_IEFDeassociationRecord (value: IEFDeassociationRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IEFDeassociationRecord) { _cached_encoder_for_IEFDeassociationRecord = function (value: IEFDeassociationRecord, elGetter: $.ASN1Encoder<IEFDeassociationRecord>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGGUTI, $.BER)(value.fiveGGUTI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeGeneralizedTime, $.BER)(value.timestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_NCGI, $.BER)(value.nCGI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeGeneralizedTime, $.BER)(value.nCGITime, $.BER);
    if (value.additionalCGIs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_AdditionalCGIs, $.BER)(value.additionalCGIs, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IEFDeassociationRecord(value, elGetter);
}


/* eslint-enable */
