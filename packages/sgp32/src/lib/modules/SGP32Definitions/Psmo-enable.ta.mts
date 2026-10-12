/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Iccid, _decode_Iccid, _encode_Iccid } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary Psmo_enable
 * @description
 * 
 * Enable one Profile that is already installed. At most one enable appears in
 * an eUICC Package. A further enable in that package is a PSMO failure;
 * section 3.4.1 does not name that failure code. On success the target is
 * marked to be enabled and the currently enabled Profile, if any, is marked to
 * be disabled. When the target is a Fallback Profile, the eUICC records the
 * currently enabled Profile for a later ES10b.ReturnFromFallback. Enabling via
 * PSMO always uses REFRESH. The eUICC behaviour with refreshFlag set is as
 * defined in SGP.22 section 5.7.16. SGP.32 v1.2, sections 2.11.1.1, 3.3.1,
 * 3.4.1, and 5.13.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-enable ::= SEQUENCE {
 *     iccid [APPLICATION 26] Iccid,
 *     rollbackFlag NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Psmo_enable {
    constructor (
        /**
         * @summary `iccid`.
         * @description
         * ICCID of the Profile to enable, as defined in SGP.22. SGP.32 v1.2, section
         * 2.11.1.1. The Profile is installed and disabled. An unknown ICCID yields
         * iccidOrAidNotFound(1). A Profile that is still enabled yields
         * profileNotInDisabledState(2). An Emergency Profile with ecallIndication TRUE
         * yields undefinedError(127). When rollback is granted and no Profile is
         * enabled or marked to be disabled, the result is rollbackNotAvailable(20).
         * SGP.32 v1.2, section 3.4.1.
         * @public
         * @readonly
         */
        readonly iccid: Iccid,
        /**
         * @summary `rollbackFlag`.
         * @description
         * Present when the eIM grants the Rollback Mechanism for this enable. The IPA
         * may call ES10b.ProfileRollback if the newly enabled Profile fails to provide
         * connectivity. The eUICC records the grant together with the Profile that is
         * to be disabled. SGP.32 v1.2, sections 2.11.1.1 and 3.4.1.
         * @public
         * @readonly
         */
        readonly rollbackFlag: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a Psmo_enable
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_enable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_enable`.
     * @returns {Psmo_enable}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_enable)]: (Psmo_enable)[_K] }): Psmo_enable {
        return new Psmo_enable(_o.iccid, _o.rollbackFlag);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_enable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_enable: $.ComponentSpec[] = [
    new $.ComponentSpec("iccid", false, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("rollbackFlag", true, $.hasTag(_TagClass.universal, 5))
];

/**
 * @summary The Trailing Root Component Types of Psmo_enable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_enable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_enable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_enable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_enable: $.ASN1Decoder<Psmo_enable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_enable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_enable (el: _Element): Psmo_enable {
    if (!_cached_decoder_for_Psmo_enable) { _cached_decoder_for_Psmo_enable = function (el: _Element): Psmo_enable {
    let iccid!: Iccid;
    let rollbackFlag: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "iccid": (_el: _Element): void => { iccid = $._decode_implicit<Iccid>(() => _decode_Iccid)(_el); },
        "rollbackFlag": (_el: _Element): void => { rollbackFlag = $._decodeNull(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Psmo_enable,
        _extension_additions_list_spec_for_Psmo_enable,
        _root_component_type_list_2_spec_for_Psmo_enable,
        undefined,
    );
    return new Psmo_enable(
        iccid,
        rollbackFlag
    );
}; }
    return _cached_decoder_for_Psmo_enable(el);
}

let _cached_encoder_for_Psmo_enable: $.ASN1Encoder<Psmo_enable> | null = null;

/**
 * @summary Encodes a(n) Psmo_enable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_enable, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_enable (value: Psmo_enable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_enable) { _cached_encoder_for_Psmo_enable = function (value: Psmo_enable): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Iccid, $.BER)(value.iccid, $.BER),
            /* IF_ABSENT  */ ((value.rollbackFlag === undefined) ? undefined : $._encodeNull(value.rollbackFlag, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_enable(value, elGetter);
}


/* eslint-enable */
