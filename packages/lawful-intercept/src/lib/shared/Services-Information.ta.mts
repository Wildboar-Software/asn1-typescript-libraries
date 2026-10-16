/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ISUP_parameters, _decode_ISUP_parameters, _encode_ISUP_parameters } from "./ISUP-parameters.ta.mjs";
// export { ISUP_parameters, _decode_ISUP_parameters, _encode_ISUP_parameters } from "./ISUP-parameters.ta.mjs";
import { DSS1_parameters_codeset_0, _decode_DSS1_parameters_codeset_0, _encode_DSS1_parameters_codeset_0 } from "./DSS1-parameters-codeset-0.ta.mjs";
// export { DSS1_parameters_codeset_0, _decode_DSS1_parameters_codeset_0, _encode_DSS1_parameters_codeset_0 } from "./DSS1-parameters-codeset-0.ta.mjs";
import { MAP_parameters, _decode_MAP_parameters, _encode_MAP_parameters } from "./MAP-parameters.ta.mjs";
// export { MAP_parameters, _decode_MAP_parameters, _encode_MAP_parameters } from "./MAP-parameters.ta.mjs";


/**
 * @summary Services_Information
 * @description
 *
 * Complementary information for the basic call. Clause A.3.2.2 item 3: basic
 * service and low layer compatibility, parameters as received from the
 * signalling protocol (for example BC, HLC, TMR, LLC).
 *
 * Table A.3.2 places bearer capability, high layer compatibility, low layer
 * compatibility, and transmission medium requirement here. It also places the
 * MCID response indicator here (ISUP, EN 300 356). Table A.5.1 sends that
 * indicator when malicious call identification is invoked.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, table A.3.2, table A.5.1,
 * annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Services-Information ::= SEQUENCE
 * {
 *     iSUP-parameters                [1] ISUP-parameters OPTIONAL,
 *     dSS1-parameters-codeset-0    [2] DSS1-parameters-codeset-0 OPTIONAL,
 *     ...,
 *     mAP-parameters                [3] MAP-parameters OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Services_Information {
    /**
     * @summary `iSUP_parameters`.
     * @description
     *
     * Additional ISUP parameters for the basic call. Transmission medium
     * requirement and transmission medium requirement prime may be supplied
     * for the calling party. Version 1 made this component mandatory and
     * allowed a zero octet when none was available.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly iSUP_parameters: OPTIONAL<ISUP_parameters>;
    /**
     * @summary `dSS1_parameters_codeset_0`.
     * @description
     *
     * DSS1 codeset-0 basic-call parameters: bearer capability, high layer
     * compatibility, and low layer compatibility, for the calling, called, or
     * forwarded-to party. Table A.8.2 uses this for tele service or bearer
     * service.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), table A.3.2, table A.8.2, annex D,
     * clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly dSS1_parameters_codeset_0: OPTIONAL<DSS1_parameters_codeset_0>;
    /**
     * @summary `mAP_parameters`.
     * @description
     *
     * MAP parameters coded as in GSM 09.02, including `map-TS-Code`.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly mAP_parameters: OPTIONAL<MAP_parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions carried with this value. This module version assigns
     * them no name and no meaning.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iSUP_parameters: OPTIONAL<ISUP_parameters>,
        dSS1_parameters_codeset_0: OPTIONAL<DSS1_parameters_codeset_0>,
        mAP_parameters: OPTIONAL<MAP_parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iSUP_parameters = iSUP_parameters;
        this.dSS1_parameters_codeset_0 = dSS1_parameters_codeset_0;
        this.mAP_parameters = mAP_parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Services_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Services_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Services_Information`.
     * @returns {Services_Information}
     */
    public static _from_object (_o: { [_K in keyof (Services_Information)]: (Services_Information)[_K] }): Services_Information {
        return new Services_Information(_o.iSUP_parameters, _o.dSS1_parameters_codeset_0, _o.mAP_parameters, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Services_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Services_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("iSUP-parameters", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dSS1-parameters-codeset-0", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Services_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Services_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Services_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Services_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("mAP-parameters", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_Services_Information: $.ASN1Decoder<Services_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Services_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Services_Information (el: _Element): Services_Information {
    if (!_cached_decoder_for_Services_Information) { _cached_decoder_for_Services_Information = function (el: _Element): Services_Information {
    let iSUP_parameters: OPTIONAL<ISUP_parameters>;
    let dSS1_parameters_codeset_0: OPTIONAL<DSS1_parameters_codeset_0>;
    let mAP_parameters: OPTIONAL<MAP_parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iSUP-parameters": (_el: _Element): void => { iSUP_parameters = $._decode_implicit<ISUP_parameters>(() => _decode_ISUP_parameters)(_el); },
        "dSS1-parameters-codeset-0": (_el: _Element): void => { dSS1_parameters_codeset_0 = $._decode_implicit<DSS1_parameters_codeset_0>(() => _decode_DSS1_parameters_codeset_0)(_el); },
        "mAP-parameters": (_el: _Element): void => { mAP_parameters = $._decode_implicit<MAP_parameters>(() => _decode_MAP_parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Services_Information,
        _extension_additions_list_spec_for_Services_Information,
        _root_component_type_list_2_spec_for_Services_Information,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Services_Information(
        iSUP_parameters,
        dSS1_parameters_codeset_0,
        mAP_parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Services_Information(el);
}

let _cached_encoder_for_Services_Information: $.ASN1Encoder<Services_Information> | null = null;

/**
 * @summary Encodes a(n) Services_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Services_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Services_Information (value: Services_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Services_Information) { _cached_encoder_for_Services_Information = function (value: Services_Information, elGetter: $.ASN1Encoder<Services_Information>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iSUP_parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISUP_parameters, $.BER)(value.iSUP_parameters, $.BER);
    }
    if (value.dSS1_parameters_codeset_0 !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_DSS1_parameters_codeset_0, $.BER)(value.dSS1_parameters_codeset_0, $.BER);
    }
    if (value.mAP_parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_MAP_parameters, $.BER)(value.mAP_parameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Services_Information(value, elGetter);
}


/* eslint-enable */
