/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UnitOfReplication, _decode_UnitOfReplication, _encode_UnitOfReplication } from "../DirectoryShadowAbstractService/UnitOfReplication.ta.mjs";
// export { UnitOfReplication, _decode_UnitOfReplication, _encode_UnitOfReplication } from "../DirectoryShadowAbstractService/UnitOfReplication.ta.mjs";
import { UpdateMode, _decode_UpdateMode, _encode_UpdateMode } from "../DirectoryShadowAbstractService/UpdateMode.ta.mjs";
// export { UpdateMode, _decode_UpdateMode, _encode_UpdateMode } from "../DirectoryShadowAbstractService/UpdateMode.ta.mjs";
import { AccessPoint, _decode_AccessPoint, _encode_AccessPoint } from "../DistributedOperations/AccessPoint.ta.mjs";
// export { AccessPoint, _decode_AccessPoint, _encode_AccessPoint } from "../DistributedOperations/AccessPoint.ta.mjs";


/**
 * @summary ShadowingAgreementInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ShadowingAgreementInfo ::= SEQUENCE {
 *   shadowSubject     UnitOfReplication,
 *   updateMode        UpdateMode DEFAULT supplierInitiated:onChange:TRUE,
 *   master            AccessPoint OPTIONAL,
 *   secondaryShadows  [2]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class ShadowingAgreementInfo {
    /**
     * @summary `shadowSubject`.
     * @public
     * @readonly
     */
    readonly shadowSubject: UnitOfReplication;
    /**
     * @summary `updateMode`.
     * @public
     * @readonly
     */
    readonly updateMode: OPTIONAL<UpdateMode>;
    /**
     * @summary `master`.
     * @public
     * @readonly
     */
    readonly master: OPTIONAL<AccessPoint>;
    /**
     * @summary `secondaryShadows`.
     * @public
     * @readonly
     */
    readonly secondaryShadows: OPTIONAL<BOOLEAN>;

    constructor (
        shadowSubject: UnitOfReplication,
        updateMode: OPTIONAL<UpdateMode>,
        master: OPTIONAL<AccessPoint>,
        secondaryShadows: OPTIONAL<BOOLEAN>
    ) {
        this.shadowSubject = shadowSubject;
        this.updateMode = updateMode;
        this.master = master;
        this.secondaryShadows = secondaryShadows;
    }

    /**
     * @summary Restructures an object into a ShadowingAgreementInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ShadowingAgreementInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShadowingAgreementInfo`.
     * @returns {ShadowingAgreementInfo}
     */
    public static _from_object (_o: { [_K in keyof (ShadowingAgreementInfo)]: (ShadowingAgreementInfo)[_K] }): ShadowingAgreementInfo {
        return new ShadowingAgreementInfo(_o.shadowSubject, _o.updateMode, _o.master, _o.secondaryShadows);
    }

    /**
     * @summary Getter that returns the default value for `updateMode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_updateMode () { return { supplierInitiated: { onChange: true } }; }
    /**
     * @summary Getter that returns the default value for `secondaryShadows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_secondaryShadows () { return false; }
}

/**
 * @summary The Leading Root Component Types of ShadowingAgreementInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("shadowSubject", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("updateMode", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("master", true, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("secondaryShadows", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ShadowingAgreementInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ShadowingAgreementInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ShadowingAgreementInfo: $.ASN1Decoder<ShadowingAgreementInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ShadowingAgreementInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ShadowingAgreementInfo (el: _Element): ShadowingAgreementInfo {
    if (!_cached_decoder_for_ShadowingAgreementInfo) { _cached_decoder_for_ShadowingAgreementInfo = function (el: _Element): ShadowingAgreementInfo {
    let shadowSubject!: UnitOfReplication;
    let updateMode: OPTIONAL<UpdateMode> = ShadowingAgreementInfo._default_value_for_updateMode;
    let master: OPTIONAL<AccessPoint>;
    let secondaryShadows: OPTIONAL<BOOLEAN> = ShadowingAgreementInfo._default_value_for_secondaryShadows;
    const callbacks: $.DecodingMap = {
        "shadowSubject": (_el: _Element): void => { shadowSubject = _decode_UnitOfReplication(_el); },
        "updateMode": (_el: _Element): void => { updateMode = _decode_UpdateMode(_el); },
        "master": (_el: _Element): void => { master = _decode_AccessPoint(_el); },
        "secondaryShadows": (_el: _Element): void => { secondaryShadows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ShadowingAgreementInfo,
        _extension_additions_list_spec_for_ShadowingAgreementInfo,
        _root_component_type_list_2_spec_for_ShadowingAgreementInfo,
        undefined,
    );
    return new ShadowingAgreementInfo(
        shadowSubject,
        updateMode,
        master,
        secondaryShadows
    );
}; }
    return _cached_decoder_for_ShadowingAgreementInfo(el);
}

let _cached_encoder_for_ShadowingAgreementInfo: $.ASN1Encoder<ShadowingAgreementInfo> | null = null;

/**
 * @summary Encodes a(n) ShadowingAgreementInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowingAgreementInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ShadowingAgreementInfo (value: ShadowingAgreementInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ShadowingAgreementInfo) { _cached_encoder_for_ShadowingAgreementInfo = function (value: ShadowingAgreementInfo, elGetter: $.ASN1Encoder<ShadowingAgreementInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_UnitOfReplication(value.shadowSubject, $.BER));
    if (value.updateMode !== undefined && !$.deepEq(value.updateMode, ShadowingAgreementInfo._default_value_for_updateMode)) {
        _components.push(/* IF_DEFAULT */ _encode_UpdateMode(value.updateMode, $.BER));
    }
    if (value.master !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AccessPoint(value.master, $.BER));
    }
    if (value.secondaryShadows !== undefined && !$.deepEq(value.secondaryShadows, ShadowingAgreementInfo._default_value_for_secondaryShadows)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.secondaryShadows, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ShadowingAgreementInfo(value, elGetter);
}


/* eslint-enable */
