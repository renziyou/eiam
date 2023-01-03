/*
 * eiam-console - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.console.pojo.result.account;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import static cn.topiam.employee.support.constant.EiamConstants.DEFAULT_DATE_TIME_FORMATTER_PATTERN;

/**
 * 根据ID查询用户结果
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2020/8/11 23:22
 */
@Data
@Schema(description = "根据ID查询用户结果")
public class UserResult implements Serializable {
    @Serial
    private static final long serialVersionUID = -5144879825451360221L;
    /**
     * ID
     */
    @Parameter(description = "ID")
    private String            id;
    /**
     * 用户名
     */
    @Parameter(description = "用户名")
    private String            username;

    /**
     * 邮箱
     */
    @Parameter(description = "邮箱")
    private String            email;

    /**
     * 手机号
     */
    @Parameter(description = "手机号")
    private String            phone;

    /**
     * 头像URL
     */
    @Parameter(description = "头像URL")
    private String            avatar;

    /**
     * 状态
     */
    @Parameter(description = "状态")
    private String            status;

    /**
     * 姓名
     */
    @Parameter(description = "姓名")
    private String            fullName;

    /**
     * 昵称
     */
    @Parameter(description = "昵称")
    private String            nickName;

    /**
     * 身份证号
     */
    @Parameter(description = "身份证号")
    private String            idCard;

    /**
     * 地址
     */
    @Parameter(description = "地址")
    private String            address;

    /**
     * 认证次数
     */
    @Parameter(description = "认证次数")
    private String            authTotal;

    /**
     * 最后登录 IP
     */
    @Parameter(description = "最后登录 IP")
    private String            lastAuthIp;

    /**
     * 上次认证时间
     */
    @Parameter(description = "上次认证时间")
    @JsonFormat(pattern = DEFAULT_DATE_TIME_FORMATTER_PATTERN)
    private LocalDateTime     lastAuthTime;

    /**
     * 数据来源
     */
    @Parameter(description = "数据来源")
    private String            dataOrigin;

    /**
     * 手机有效
     */
    @Parameter(description = "手机验证有效")
    private Boolean           phoneVerified;

    /**
     * 邮箱验证有效
     */
    @Parameter(description = "邮箱验证有效")
    private Boolean           emailVerified;

    /**
     * 外部ID
     */
    @Parameter(description = "外部ID")
    private String            externalId;

    /**
     * 过期时间
     */
    @Parameter(description = "过期时间")
    private LocalDate         expireDate;

    /**
     * 创建时间
     */
    @Parameter(description = "创建时间")
    private LocalDateTime     createTime;

    /**
     * 最后修改时间
     */
    @Parameter(description = "修改时间")
    private LocalDateTime     updateTime;

    /**
     * 备注
     */
    @Parameter(description = "备注")
    private String            remark;

}
